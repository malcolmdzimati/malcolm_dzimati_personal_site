'use client';

import { motion } from 'framer-motion';
import { TimelineItem } from '@/components/TimelineItem';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CVPage() {
  return (
    <div className="bg-white text-black dark:bg-zinc-900 dark:text-white rounded-xl shadow-md p-6 sm:p-8 max-w-2xl w-full space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">Batsirai Dzimati</h1>
        <p className="text-lg text-gray-500">Software Engineer | Payments & Cryptography</p>
        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          <a href="/Batsirai-Dzimati-CV.pdf" download>
            <Button variant="outline">Download PDF</Button>
          </a>
          <a href="https://github.com/malcolmdzimati" target="_blank">
            <Button variant="ghost">GitHub</Button>
          </a>
          <a href="mailto:malcolmdzimati@gmail.com">
            <Button variant="ghost">Email</Button>
          </a>
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-6 text-gray-800 dark:text-white">
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
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="space-y-6">
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
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 text-gray-800 dark:text-white">
            <div>
              <h3 className="font-semibold">Languages</h3>
              <p>Java, C#, C++, Python, Angular</p>
            </div>
            <div>
              <h3 className="font-semibold">Cloud & DevOps</h3>
              <p>Azure, CI/CD, Containers, Helm, Kubernetes</p>
            </div>
            <div>
              <h3 className="font-semibold">Storage</h3>
              <p>Postgres, SQL</p>
            </div>
            <div>
              <h3 className="font-semibold">Cryptography</h3>
              <p>PayShield, Luna HSM, Secure Key Mgmt</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-400">
          <li>Azure Developer Associate (AZ-204) – Mar 2024</li>
          <li>Azure Fundamentals (AZ-900) – Jun 2023</li>
          <li>Cryptography & Secure Systems (Udemy) – Jul–Dec 2023</li>
        </ul>
      </section>
    </div>
  );
}