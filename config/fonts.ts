import { Fira_Code as FontMono, Inter as FontSans, Fraunces as FontSerif } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
