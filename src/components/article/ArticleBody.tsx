import React from 'react';
import Link from 'next/link';

interface ArticleBodyProps {
  content: string;
}

// Helper to convert heading title into an anchored slug ID matching Table of Contents
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({ content }) => {
  // Parse markdown content into structured blocks
  const lines = content.split('\n');
  const blocks: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let codeLang = '';
  let inTable = false;
  let tableRows: string[][] = [];
  let inList: 'ul' | 'ol' | null = null;
  let listItems: React.ReactNode[] = [];

  const flushList = (key: number) => {
    if (!inList || listItems.length === 0) return;
    if (inList === 'ul') {
      blocks.push(
        <ul key={`ul-${key}`} className="my-5 ml-6 list-disc space-y-2 text-ink-body font-sans">
          {listItems}
        </ul>
      );
    } else {
      blocks.push(
        <ol key={`ol-${key}`} className="my-5 ml-6 list-decimal space-y-2 text-ink-body font-sans">
          {listItems}
        </ol>
      );
    }
    listItems = [];
    inList = null;
  };

  const flushTable = (key: number) => {
    if (tableRows.length === 0) return;
    const headerRow = tableRows[0];
    const bodyRows = tableRows.slice(2); // Skip separator row

    blocks.push(
      <div key={`table-${key}`} className="my-8 overflow-x-auto">
        <table className="min-w-full divide-y divide-ink-border border border-ink-border text-left text-sm font-sans">
          <thead className="bg-paper-100">
            <tr>
              {headerRow.map((cell, i) => (
                <th
                  key={i}
                  className="px-4 py-3 font-semibold text-ink-heading font-serif tracking-tight"
                >
                  {cell.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-borderLight bg-white">
            {bodyRows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-paper-50/50">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="px-4 py-3 text-ink-body">
                    {parseInline(cell.trim())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  };

  const flushCode = (key: number) => {
    blocks.push(
      <div
        key={`code-${key}`}
        className="my-6 rounded-lg bg-[#18181B] text-neutral-200 p-4 font-mono text-xs overflow-x-auto border border-neutral-800"
      >
        {codeLang && (
          <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2 border-b border-neutral-800 pb-1">
            {codeLang}
          </div>
        )}
        <pre className="leading-relaxed">
          <code>{codeBuffer.join('\n')}</code>
        </pre>
      </div>
    );
    codeBuffer = [];
    inCodeBlock = false;
    codeLang = '';
  };

  function parseInline(text: string): React.ReactNode {
    // Basic inline formatting: links, bold, code, italics
    // Match [link text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIdx = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        parts.push(parseFormatting(text.substring(lastIdx, match.index)));
      }
      const linkText = match[1];
      const linkUrl = match[2];

      if (linkUrl.startsWith('/')) {
        parts.push(
          <Link
            key={match.index}
            href={linkUrl}
            className="text-editorial-accent underline underline-offset-2 hover:text-editorial-accentDark font-medium"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-editorial-accent underline underline-offset-2 hover:text-editorial-accentDark font-medium"
          >
            {linkText}
          </a>
        );
      }
      lastIdx = linkRegex.lastIndex;
    }

    if (lastIdx < text.length) {
      parts.push(parseFormatting(text.substring(lastIdx)));
    }

    return parts.length > 0 ? parts : text;
  }

  function parseFormatting(text: string): React.ReactNode {
    // Process `code`, **bold**, *italic*
    const segments = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return segments.map((seg, idx) => {
      if (seg.startsWith('`') && seg.endsWith('`')) {
        return (
          <code
            key={idx}
            className="bg-paper-100 border border-ink-borderLight text-ink-heading px-1.5 py-0.5 rounded text-xs font-mono"
          >
            {seg.slice(1, -1)}
          </code>
        );
      }
      if (seg.startsWith('**') && seg.endsWith('**')) {
        return (
          <strong key={idx} className="font-semibold text-ink-heading">
            {seg.slice(2, -2)}
          </strong>
        );
      }
      if (seg.startsWith('*') && seg.endsWith('*')) {
        return <em key={idx}>{seg.slice(1, -1)}</em>;
      }
      return seg;
    });
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code fences
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        flushCode(i);
      } else {
        if (inTable) flushTable(i);
        if (inList) flushList(i);
        inCodeBlock = true;
        codeLang = line.replace('```', '').trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Handle Tables
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (inList) flushList(i);
      inTable = true;
      const cells = line
        .trim()
        .slice(1, -1)
        .split('|');
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable(i);
    }

    // Handle Headings
    if (line.startsWith('## ')) {
      if (inList) flushList(i);
      const title = line.replace('## ', '').trim();
      const id = slugify(title);
      blocks.push(
        <h2
          key={i}
          id={id}
          className="font-serif font-bold text-2xl sm:text-3xl text-ink-heading mt-12 mb-5 pb-2 border-b border-ink-border scroll-mt-28"
        >
          {title}
        </h2>
      );
      continue;
    }

    if (line.startsWith('### ')) {
      if (inList) flushList(i);
      const title = line.replace('### ', '').trim();
      const id = slugify(title);
      blocks.push(
        <h3
          key={i}
          id={id}
          className="font-serif font-semibold text-xl sm:text-2xl text-ink-heading mt-8 mb-3 scroll-mt-28"
        >
          {title}
        </h3>
      );
      continue;
    }

    // Divider
    if (line.trim() === '---') {
      if (inList) flushList(i);
      blocks.push(
        <hr key={i} className="my-10 border-t border-ink-border" />
      );
      continue;
    }

    // Unordered List item
    if (line.trim().startsWith('- ')) {
      if (inList === 'ol') flushList(i);
      inList = 'ul';
      const itemText = line.trim().slice(2);
      listItems.push(
        <li key={`li-${i}`} className="leading-relaxed">
          {parseInline(itemText)}
        </li>
      );
      continue;
    }

    // Ordered List item
    if (/^\d+\.\s/.test(line.trim())) {
      if (inList === 'ul') flushList(i);
      inList = 'ol';
      const itemText = line.trim().replace(/^\d+\.\s/, '');
      listItems.push(
        <li key={`li-${i}`} className="leading-relaxed">
          {parseInline(itemText)}
        </li>
      );
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      if (inList) flushList(i);
      const quoteText = line.slice(2);
      blocks.push(
        <blockquote
          key={i}
          className="border-l-4 border-editorial-accent pl-5 my-6 italic text-ink-body font-serif text-lg bg-paper-100/40 py-2 rounded-r"
        >
          {parseInline(quoteText)}
        </blockquote>
      );
      continue;
    }

    // Empty lines
    if (!line.trim()) {
      if (inList) flushList(i);
      continue;
    }

    // Standard Paragraph
    if (inList) flushList(i);
    blocks.push(
      <p key={i} className="text-ink-body font-serif text-lg leading-[1.8] my-5">
        {parseInline(line)}
      </p>
    );
  }

  if (inCodeBlock) flushCode(lines.length);
  if (inTable) flushTable(lines.length);
  if (inList) flushList(lines.length);

  return <div className="article-body font-serif">{blocks}</div>;
};

