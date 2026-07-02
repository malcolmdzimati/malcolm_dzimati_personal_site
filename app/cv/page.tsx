'use client';

import { motion } from 'framer-motion';
import { TimelineItem } from '@/components/TimelineItem';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
        <p className="text-lg text-muted-foreground mt-2">Software Engineer | Payments & Cryptography</p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="/Batsirai-Dzimati-CV.pdf" download>
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

      {/* Experience Timeline */}
      <section>
        <h2 className="font-serif text-2xl mb-8">Experience</h2>
        <div className="space-y-8">
          <TimelineItem
            date="Jan 2024 – Present"
            title="Software Engineer"
            subtitle="Investec Private Bank, Sandton"
            points={[
              'Modernized and stabilized payment systems for reliability and scalability.',
              'Enhanced 3D Secure service for seamless user experience during peak events.',
              'Led secure HSM migrations and key ceremonies with high security compliance.',
              'Modernized the bank’s cryptography platform for scalable operations.',
            ]}
          />
          <TimelineItem
            date="Jan 2023 – Dec 2023"
            title="Graduate Software Engineer"
            subtitle="Investec Private Bank, Sandton"
            points={[
              'Migrated legacy systems to Azure cloud using CI/CD pipelines.',
              'Built secure PIN change systems using PayShield and Luna HSMs.',
            ]}
          />
          <TimelineItem
            date="Feb 2022 – Dec 2022"
            title="Computer Lab Technician"
            subtitle="University of Pretoria"
            points={[
              'Maintained lab systems and provided hardware/software support.',
              'Resolved IT issues for students and staff efficiently.',
            ]}
          />
        </div>
      </section>

      {/* Education */}
      <section>
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
      </section>

      {/* Skills */}
      <section>
        <h2 className="font-serif text-2xl mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Languages', skills: ['Java', 'C#', 'C++', 'Python', 'Angular'] },
            { title: 'Cloud & DevOps', skills: ['Azure', 'CI/CD', 'Containers', 'Helm', 'Kubernetes'] },
            { title: 'Storage', skills: ['Postgres', 'SQL'] },
            { title: 'Cryptography', skills: ['PayShield', 'Luna HSM', 'Secure Key Mgmt'] },
          ].map(({ title, skills }) => (
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
      </section>

      {/* Certifications */}
      <section>
        <h2 className="font-serif text-2xl mb-6">Certifications</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Azure Developer Associate (AZ-204) – Mar 2024</li>
          <li>Azure Fundamentals (AZ-900) – Jun 2023</li>
          <li>Cryptography & Secure Systems (Udemy) – Jul–Dec 2023</li>
        </ul>
      </section>
    </div>
  );
}