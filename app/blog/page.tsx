// import { getSortedPostsData, formatTopicDisplay } from "@/lib/posts";
// import Link from "next/link";
// import TopicTags from "@/components/TopicTags";

// export default function BlogPage() {
//   const posts = getSortedPostsData();

//   const allTopics = Array.from(
//     new Set(posts.flatMap((post) => post.topics))
//   ).sort();

//   return (
//     <div className="min-h-screen bg-[#f9f8f6] dark:bg-[#111110]">
//       <div className="max-w-2xl mx-auto px-6 py-20">

//         {/* Header */}
//         <header className="mb-16">
//           <p className="text-xs tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 mb-3">
//             Blog
//           </p>
//           <h1 className="text-3xl font-light text-stone-800 dark:text-stone-100 tracking-tight">
//             assis_site & Ideias
//           </h1>
//         </header>

//         {/* Topics */}
//         <section className="mb-14">
//           <p className="text-[11px] tracking-[0.15em] uppercase text-stone-400 dark:text-stone-600 mb-4">
//             Tópicos
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {allTopics.map((topic) => (
//               <Link
//                 key={topic}
//                 href={`/topics/${topic}`}
//                 className="text-xs text-stone-500 dark:text-stone-300 border border-stone-200 dark:border-stone-700 px-3 py-1 rounded-full hover:border-stone-400 dark:hover:border-stone-500 hover:text-stone-700 dark:hover:text-stone-200 transition-all duration-200"
//               >
//                 {topic.charAt(0).toUpperCase() + topic.slice(1).replace(/-/g, " ")}
//               </Link>
//             ))}
//           </div>
//         </section>

//         {/* Divider */}
//         <div className="border-t border-stone-200 dark:border-stone-800 mb-14" />

//         {/* Posts */}
//         <div className="space-y-0">
//           {posts.map((post, index) => {
//             const { visibleTopics, hiddenTopics, hasHidden } = formatTopicDisplay(post.topics);

//             return (
//               <article
//                 key={post.id}
//                 className="group border-b border-stone-100 dark:border-stone-800/60 py-8 first:pt-0"
//               >
//                 <div className="flex items-start justify-between gap-8">
//                   <div className="flex-1 min-w-0">
//                     {/* Meta */}
//                     <div className="flex items-center gap-3 mb-3">
//                       <time
//                         dateTime={post.date}
//                         className="text-[11px] tracking-wide text-stone-400 dark:text-stone-400 tabular-nums"
//                       >
//                         {post.date}
//                       </time>
//                       <span className="text-stone-200 dark:text-stone-700">·</span>
//                       <TopicTags
//                         visibleTopics={visibleTopics}
//                         hiddenTopics={hiddenTopics}
//                         hasHidden={hasHidden}
//                       />
//                     </div>

//                     {/* Title */}
//                     <Link href={`/posts/${post.id}`}>
//                       <h2 className="text-base font-medium text-stone-700 dark:text-stone-200 leading-snug group-hover:text-stone-900 dark:group-hover:text-white transition-colors duration-150">
//                         {post.title}
//                       </h2>
//                     </Link>
//                   </div>

//                   {/* Arrow */}
//                   <Link
//                     href={`/posts/${post.id}`}
//                     className="mt-1 flex-shrink-0 text-stone-300 dark:text-stone-600 group-hover:text-stone-500 dark:group-hover:text-stone-400 transition-colors duration-150"
//                     aria-label="Ler post"
//                   >
//                     <svg
//                       className="w-4 h-4 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-150"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </Link>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }