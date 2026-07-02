'use client';

import { motion } from 'framer-motion';
import { TimelineItem } from '@/components/TimelineItem';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const skillGroups = [
  { title: 'Languages', skills: ['Java', 'Python', 'C#', 'TypeScript'] },
  { title: 'Frameworks', skills: ['Spring Boot', 'FastAPI', 'Django', '.NET', 'Angular', 'Next.js'] },
  { title: 'Cloud', skills: ['AWS (Solutions Architect)', 'Azure (DevOps Expert, Developer Associate)'] },
  { title: 'Architecture', skills: ['Distributed Systems', 'Event-Driven Architecture', 'Microservices', 'API Design', 'Event Streaming'] },
  { title: 'DevOps & Infra', skills: ['CI/CD', 'Kubernetes', 'Helm', 'Infrastructure as Code (Bicep)', 'Observability'] },
  { title: 'Testing', skills: ['TDD', 'Unit & Integration Testing', 'k6 (load testing)', 'SpecFlow', 'xUnit', 'Playwright'] },
  { title: 'AI', skills: ['LLM Applications', 'RAG', 'Agentic Workflows', 'LangGraph', 'MCP Tooling'] },
  { title: 'Data', skills: ['PostgreSQL', 'SQL', 'Snowflake', 'Query Optimisation', 'Schema Design'] },
  { title: 'Leadership & Delivery', skills: ['Technical Leadership', 'Cross-Functional Collaboration', 'Stakeholder Communication', 'Agile Delivery', 'Mentorship'] },
];

export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto w-full space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Digital CV
        </p>
        <h1 className="font-serif italic text-4xl sm:text-5xl">Batsirai Dzimati</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Software Engineer | Distributed Systems & Cloud-Native Backend
        </p>
        <p className="text-sm text-muted-foreground mt-1">Midrand, Gauteng</p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Batsirai-Dzimati-CV.pdf`} download>
            <Button variant="default">Download PDF</Button>
          </a>
          <a href="https://github.com/malcolmdzimati" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">GitHub</Button>
          </a>
          <a href="mailto:malcolmdzimati@gmail.com">
            <Button variant="outline">Email</Button>
          </a>
        </div>
      </motion.div>

      {/* Summary */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <h2 className="font-serif text-2xl mb-4">Summary</h2>
        <p className="text-muted-foreground leading-relaxed">
          Software Engineer with 3+ years of experience building scalable, high-performance distributed
          systems across financial services, cloud-native platforms, and data-intensive environments.
          Proven track record delivering production-grade backend systems, event-driven architectures, and
          high-volume transactional platforms in critical, time-sensitive environments. Experienced across
          the full software development lifecycle with hands-on expertise in Java, Python, .NET, cloud
          infrastructure (AWS & Azure), DevOps, and modern engineering practices — with a growing focus on
          applied AI and agentic systems.
        </p>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <h2 className="font-serif text-2xl mb-8">Experience</h2>
        <div className="space-y-8">
          <TimelineItem
            date="Oct 2025 – Present"
            title="Forward Deployed Tech Lead – AI & Cloud Platforms"
            subtitle="Vectr Labs, Sandton"
            points={[
              'Joined as one of the earliest technical hires; led architecture, cloud infrastructure strategy, AI initiatives, and full-stack engineering delivery across multiple client and internal platform projects.',
              'Architected and delivered an intelligent analytics dashboard for a major South African insurance company, surfacing key business insights through AI-powered anomaly detection, trend analysis, and automated reporting.',
              'Architected near real-time telemetry and predictive maintenance platforms processing operational data from 160+ industrial assets using event-driven architecture, Kafka, Snowflake, and cloud-native backend services (Python/FastAPI).',
              'Built AI-powered RAG and agentic workflows (LangGraph, MCP tooling, vector retrieval) to generate maintenance diagnostics and automated fleet health summaries.',
              'Established organisation-level DevOps and CI/CD standards across AWS and Azure environments, and mentored 10+ junior engineers.',
            ]}
          />
          <TimelineItem
            date="Apr 2024 – Dec 2025"
            title="Intermediate Software Engineer – Payments & Cryptography Platform"
            subtitle="Investec Private Bank, Sandton"
            points={[
              'Core contributor to high-stakes payments infrastructure, on a formal on-call rotation for critical card, PIN, and cryptography systems.',
              'Delivered payment system modernisation across Java (Spring Boot) and .NET microservices, improving throughput during peak load events including Black Friday.',
              'Designed and implemented event-driven architecture patterns replacing synchronous polling flows — later adopted across multiple payment services.',
              'Built and maintained cryptographic infrastructure integrating HSMs (PayShield, Luna) for secure PIN operations and key lifecycle management, ensuring PCI-DSS compliance.',
              'Applied rigorous TDD practices with unit, integration, and end-to-end test coverage using SpecFlow, xUnit, k6, and Playwright.',
            ]}
          />
          <TimelineItem
            date="Jan 2023 – Mar 2024"
            title="Graduate Software Engineer – Payments & Cryptography"
            subtitle="Investec Private Bank, Sandton"
            points={[
              'Planned and led cryptographic key rotation ceremonies for critical banking systems with zero customer-facing downtime.',
              'Built and maintained RESTful APIs supporting secure payment and card authentication systems.',
              'Developed systems for secure PIN operations, integrated with HSM infrastructure and end-to-end encryption pipelines.',
              'Contributed to cloud migration initiatives and CI/CD pipeline implementation, modernising legacy payment components.',
            ]}
          />
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <h2 className="font-serif text-2xl mb-8">Education</h2>
        <div className="space-y-8">
          <TimelineItem
            date="2023 – 2024"
            title="BSc Honours in Computer Science"
            subtitle="University of Pretoria"
            points={['Focus: Software Engineering, Cybersecurity']}
          />
          <TimelineItem
            date="2020 – 2022"
            title="BSc Computer Science & Statistics"
            subtitle="University of Pretoria"
            points={['Focus: Data Science, Software Engineering, Cybersecurity']}
          />
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <h2 className="font-serif text-2xl mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map(({ title, skills }) => (
            <Card key={title} className="p-6">
              <h3 className="font-medium text-lg mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <h2 className="font-serif text-2xl mb-6">Certifications</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>AWS Certified Solutions Architect – Associate – May 2026</li>
          <li>Azure DevOps Engineer Expert (AZ-400) – Aug 2025</li>
          <li>Azure Developer Associate (AZ-204) – Mar 2024</li>
          <li>Azure Fundamentals (AZ-900) – Jun 2023</li>
          <li>Cryptography & Secure Systems (Udemy) – 2023</li>
        </ul>
      </motion.section>
    </div>
  );
}
