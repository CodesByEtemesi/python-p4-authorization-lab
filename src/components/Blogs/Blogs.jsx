// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import Heading from "../Shared/Heading";

// // import images 
// import Img1 from "../../assets/blogs/blog-1.jpeg";
// import Img2 from "../../assets/blogs/blog-2.jpeg";
// import Img3 from "../../assets/blogs/blog-3.jpeg";

// const BlogData = [
//     {
//         title: "How to choose perfect storage units",
//         subtitle: "minima facere deserunt vero illo beatea deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
//         published: "May 11, 2024 by Etemesi",
//         image: Img1,
//     },
//     {
//         title: "How to choose perfect containers",
//         subtitle: "minima facere deserunt vero illo beatea deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
//         published: "May 11, 2024 by Patrick",
//         image: Img2,
//     },
//     {
//         title: "How to choose perfect storage company",
//         subtitle: "minima facere deserunt vero illo beatea deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
//         published: "May 11, 2024 by Paul",
//         image: Img3,
//     },
// ]

// const Blogs = () => {
//   return (
//     <div>
//         <div className="container">
//             {/* Header Section  */}
//             <Heading title="Recent News" subtitle={"Explore our Blogs."} />

//             {/* Blog Section  */}
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
//                 {/* Blog card  */}
//                 {BlogData.map((data) => (
//                         <div key={data.title} className='bg-white dark:bg-gray-900'>
//                             {/* image section  */}
//                             <div className='overflow-hidden rounded-2xl mb-2'>
//                                 <img 
//                                 src={data.image} 
//                                 alt="" 
//                                 className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
//                                 />
//                             </div>
//                             {/* content section  */}
//                             <div className='space-y-2'>
//                                 <p className='text-xs text-gray-500'>{data.published}</p>
//                                 <p className='font-bold line-clamp-1'>{data.title}</p>
//                                 <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>

//                             </div>
//                             </div>
//                     ))
//                 }
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Blogs

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Heading from "../Shared/Heading";

// import images 
import Img1 from "../../assets/blogs/blog-1.jpeg";
import Img2 from "../../assets/blogs/blog-2.jpeg";
import Img3 from "../../assets/blogs/blog-3.jpeg";

const BlogData = [
    {
        title: "How to choose perfect storage units",
        subtitle: "minima facere deserunt vero illo beatea deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "May 11, 2024 by Etemesi",
        image: Img1,
    },
    {
        title: "How to choose perfect containers",
        subtitle: "minima facere deserunt vero illo beatea deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "May 11, 2024 by Patrick",
        image: Img2,
    },
    {
        title: "How to choose perfect storage company",
        subtitle: "minima facere deserunt vero illo beatea deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "May 11, 2024 by Paul",
        image: Img3,
    },
]

const Blogs = () => {
  return (
    <div>
        <div className="container">
            {/* Header Section  */}
            <Heading title="Recent News" subtitle={"Explore our Blogs."} />

            {/* Blog Section  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {/* Blog card  */}
                {BlogData.map((data) => (
                        <div key={data.title} className='bg-white dark:bg-gray-900'>
                            {/* image section  */}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img 
                                src={data.image} 
                                alt="" 
                                className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                                />
                            </div>
                            {/* content section  */}
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-clamp-1'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>

                            </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs