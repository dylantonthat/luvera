import Image from 'next/image';

const HowItWorks = () => {
  const blogs = [
    {
      title: 'Upload an Image',
      category: 'Step 1',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: '/luvera-pic2.png',
    },
    {
      title: 'AI Analyzes Your Skin',
      category: 'Step 2',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: '/luvera-pic3.png',
    },
    {
      title: 'Get Your Routine',
      category: 'Step 3',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: '/luvera-pic4.png',
    }
  ];

  return (
    <section className="text-center py-16 bg-background text-white">
      <h2 className="text-4xl font-display text-[#8B817A]">HOW IT WORKS</h2>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="mx-auto w-full max-w-[300px] max-h-[400px] object-cover"
                  src={blog.image}
                  alt="blog"
                  layout="intrinsic"
                  width={400}
                  height={500}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-display font-medium text-gray-400 mb-1">{blog.category}</h2>
                  <h1 className="title-font text-lg font-display font-medium text-gray-900 mb-3">{blog.title}</h1>
                  <p className="leading-relaxed font-display text-[#8B817A] mb-3">{blog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
  