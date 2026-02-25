import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import mermaid from 'mermaid';

mermaid.initialize({ startOnLoad: false, theme: 'dark' });

const Mermaid = ({ chart }: { chart: string }) => {
    const [svg, setSvg] = useState<string>('');

    useEffect(() => {
        let isMounted = true;
        const renderChart = async () => {
            try {
                const id = `mermaid-${Math.round(Math.random() * 10000000)}`;
                const { svg } = await mermaid.render(id, chart);
                if (isMounted) {
                    setSvg(svg);
                }
            } catch (err) {
                console.error("Mermaid parsing error", err);
            }
        };
        renderChart();
        return () => { isMounted = false; };
    }, [chart]);

    return (
        <div
            className="flex justify-center my-8 overflow-auto mermaid-container"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
};

const BlogDetail: React.FC = () => {
    const { blogId } = useParams<{ blogId: string }>();
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!blogId) return;

        setLoading(true);
        fetch(`blogs/${blogId}.md`)
            .then(res => {
                if (!res.ok) throw new Error('Blog not found');
                return res.text();
            })
            .then(text => {
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, [blogId]);

    if (loading) {
        return <div className="min-h-screen pt-32 text-center text-white">Loading content...</div>;
    }

    if (error) {
        return (
            <div className="min-h-screen pt-32 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Error loading blog</h2>
                <p className="text-red-400">{error}</p>
                <Link to="/content" className="text-indigo-400 hover:text-indigo-300 mt-4 inline-block">&larr; Back to Blogs</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 print:py-0 print:bg-white text-slate-800">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none">
                <div className="bg-slate-900 text-white p-8 print:bg-white print:text-black">
                    <Link to="/content" className="text-indigo-400 hover:text-indigo-300 text-sm font-bold uppercase tracking-wider mb-4 block print:hidden">&larr; Back to Blogs</Link>
                    <h1 className="text-3xl font-black mb-2">{blogId?.replace(/-/g, ' ')}</h1>
                </div>
                <div className="p-8 prose prose-slate max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ node, inline, className, children, ...props }: any) {
                                const match = /language-(\w+)/.exec(className || '');
                                const isBlock = !inline && (match || String(children).includes('\n'));

                                if (isBlock && match && match[1] === 'mermaid') {
                                    return <Mermaid chart={String(children).replace(/\n$/, '')} />;
                                }

                                return isBlock ? (
                                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-auto my-4 text-sm font-mono leading-relaxed">
                                        <code className={className} style={{ backgroundColor: 'transparent', color: 'inherit', padding: 0 }} {...props}>
                                            {children}
                                        </code>
                                    </pre>
                                ) : (
                                    <code className="px-1.5 py-0.5 rounded text-sm font-mono border border-slate-200" style={{ backgroundColor: '#f1f5f9', color: '#1e293b' }} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 pb-2 border-b border-slate-200" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-slate-200 text-slate-800" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-4 leading-relaxed text-slate-700" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700 marker:text-slate-400" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-slate-700 marker:text-slate-400" {...props} />,
                            li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-indigo-500 bg-indigo-50 pl-4 py-2 pr-4 italic my-6 text-slate-700 rounded-r-lg shadow-sm" {...props} />,
                            a: ({ node, ...props }) => <a className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
                            table: ({ node, ...props }) => <div className="overflow-x-auto mb-6"><table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-lg shadow-sm" {...props} /></div>,
                            th: ({ node, ...props }) => <th className="px-4 py-3 bg-slate-50 text-left text-sm font-semibold text-slate-900 border-b border-slate-200" {...props} />,
                            td: ({ node, ...props }) => <td className="px-4 py-3 text-sm text-slate-700 border-b border-slate-200" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold text-slate-900" {...props} />
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
