import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import clientPromise from "@/lib/mongodb";

export const runtime = "nodejs";

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("from_name")?.toString().trim();
    const email = formData.get("from_email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const position = formData.get("position")?.toString().trim();
    const linkedin = formData.get("linkedin")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    const resume = formData.get("attachment");

    if (
      !fullName ||
      !email ||
      !phone ||
      !position ||
      !(resume instanceof File)
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const MAX_SIZE = 5 * 1024 * 1024;
    if (resume.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "Resume file is too large." },
        { status: 400 }
      );
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    try {
      const client = await clientPromise;
      const db = client.db("apexadvisorgroup");
      const applicationsCollection = db.collection("careerApplications");

      await applicationsCollection.insertOne({
        fullName,
        email,
        phone,
        position,
        linkedin,
        message,
        resume: {
          filename: resume.name,
          contentType: resume.type,
          size: resume.size,
          data: resumeBuffer,
        },
        createdAt: new Date(),
      });
    } catch (dbError) {
      console.error("Failed to save application to MongoDB:", dbError);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.user,
        pass: process.env.PASS?.replace(/\s+/g, ""),
      },
    });

    await transporter.sendMail({
      from: `"Apex Advisor Group Careers" <${process.env.user}>`,
      to: "arsahak.bayshore@gmail.com",
      replyTo: email,
      subject: `New Application: ${position} — ${fullName}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${escapeHtml(position)}</p>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        ${
          linkedin
            ? `<p><strong>LinkedIn/Portfolio:</strong> ${escapeHtml(
                linkedin
              )}</p>`
            : ""
        }
        ${
          message
            ? `<p><strong>Message:</strong><br/>${escapeHtml(
                message
              ).replace(/\n/g, "<br/>")}</p>`
            : ""
        }
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Career application submission failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
