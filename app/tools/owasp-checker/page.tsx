'use client';

import { useState } from 'react';
import { ChevronRight, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';

interface Vulnerability {
  id: string;
  name: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  description: string;
  examples: string[];
  remediation: string;
}

const vulnerabilities: Vulnerability[] = [
  {
    id: 'sql-injection',
    name: 'SQL Injection',
    severity: 'Critical',
    description: 'Allows attackers to interfere with database queries by injecting malicious SQL code.',
    examples: [
      "Concatenating user input directly: `SELECT * FROM users WHERE id = ' + userId + '`",
      "Not validating email input before database query",
    ],
    remediation: 'Use parameterized queries or prepared statements. Never concatenate user input into SQL strings.',
  },
  {
    id: 'xss',
    name: 'Cross-Site Scripting (XSS)',
    severity: 'High',
    description: 'Injecting malicious scripts into web pages viewed by other users.',
    examples: [
      "Rendering user comments without sanitization",
      "Storing user input in database without escaping",
      'Using innerHTML with user-provided data',
    ],
    remediation: 'Escape all user input. Use textContent instead of innerHTML. Implement Content Security Policy (CSP).',
  },
  {
    id: 'csrf',
    name: 'Cross-Site Request Forgery (CSRF)',
    severity: 'High',
    description: 'Tricks users into making unwanted requests to another website.',
    examples: [
      'State-changing requests without CSRF tokens',
      'Relying solely on cookies for authentication without token validation',
    ],
    remediation: 'Implement CSRF tokens. Use SameSite cookie attribute. Require re-authentication for sensitive actions.',
  },
  {
    id: 'broken-auth',
    name: 'Broken Authentication',
    severity: 'Critical',
    description: 'Flaws in authentication mechanisms allow attackers to compromise user accounts.',
    examples: [
      'Passwords stored in plain text',
      'Session IDs exposed in URLs',
      'No protection against brute force attacks',
    ],
    remediation: 'Hash passwords with bcrypt/Argon2. Use secure session management. Implement rate limiting.',
  },
  {
    id: 'sensitive-data',
    name: 'Sensitive Data Exposure',
    severity: 'High',
    description: 'Transmitting or storing sensitive data without proper encryption.',
    examples: [
      'HTTP instead of HTTPS',
      'API keys exposed in client-side code',
      'Unencrypted databases',
    ],
    remediation: 'Always use HTTPS. Encrypt sensitive data at rest and in transit. Never commit secrets to version control.',
  },
  {
    id: 'xxe',
    name: 'XML External Entity (XXE)',
    severity: 'High',
    description: 'Exploiting XML parsers to read files or perform denial of service attacks.',
    examples: [
      'Processing untrusted XML without disabling external entities',
      'Uploading XML files without validation',
    ],
    remediation: 'Disable XML external entity processing. Validate and sanitize XML input.',
  },
  {
    id: 'broken-access',
    name: 'Broken Access Control',
    severity: 'Critical',
    description: 'Users can access resources or perform actions they should not be allowed to.',
    examples: [
      'No verification of user permissions before showing data',
      'Accessing other users\' resources by changing ID in URL',
      'Admin functions available to regular users',
    ],
    remediation: 'Verify user permissions on every request. Implement role-based access control (RBAC).',
  },
  {
    id: 'security-misconfig',
    name: 'Security Misconfiguration',
    severity: 'High',
    description: 'Improper security configurations expose the application to attacks.',
    examples: [
      'Default credentials not changed',
      'Unnecessary services enabled',
      'Error messages exposing sensitive information',
    ],
    remediation: 'Disable unnecessary features. Use strong configurations. Hide error details from users.',
  },
];

export default function OWASPChecker() {
  const [selectedVulnerabilities, setSelectedVulnerabilities] = useState<Set<string>>(new Set());

  const toggleVulnerability = (id: string) => {
    const updated = new Set(selectedVulnerabilities);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setSelectedVulnerabilities(updated);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'High': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Low': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center gap-1">
          <ChevronRight size={16} className="rotate-180" /> Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">OWASP Vulnerability Reference</h1>
            <p className="text-slate-600 mt-2">OWASP Top 10 2021 vulnerabilities and how to prevent them.</p>
          </div>

          {/* Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex gap-3">
              <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">About This Tool</p>
                <p className="text-sm text-slate-700 mt-1">This is an educational reference for the most critical web application vulnerabilities. Click on any vulnerability to see examples and remediation steps.</p>
              </div>
            </div>
          </div>

          {/* Vulnerability List */}
          <div className="space-y-4">
            {vulnerabilities.map((vuln) => (
              <div key={vuln.id}>
                <button
                  onClick={() => toggleVulnerability(vuln.id)}
                  className={`w-full border-2 rounded-lg p-4 text-left transition-all ${getSeverityColor(vuln.severity)} hover:shadow-md`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{vuln.name}</h3>
                      <p className="text-sm opacity-90">{vuln.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                        vuln.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                        vuln.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                        vuln.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {vuln.severity}
                      </span>
                    </div>
                  </div>
                </button>

                {selectedVulnerabilities.has(vuln.id) && (
                  <div className="mt-2 bg-white border border-slate-200 rounded-lg p-6 space-y-4">
                    {/* Examples */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">❌ Vulnerable Code Examples</h4>
                      <div className="space-y-2">
                        {vuln.examples.map((example) => (
                          <div key={example} className="bg-red-50 border border-red-200 rounded p-3 font-mono text-sm text-slate-700 overflow-x-auto">
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Remediation */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">✅ How to Fix It</h4>
                      <p className="text-sm text-slate-700">{vuln.remediation}</p>
                    </div>

                    <button
                      onClick={() => toggleVulnerability(vuln.id)}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Hide details
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-slate-100 rounded-lg p-6 text-center text-sm text-slate-600">
            <p>Learn more at <a href="https://owasp.org/Top10/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">owasp.org/Top10</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
