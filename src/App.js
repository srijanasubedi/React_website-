import React, { useState } from 'react';

function ReviewsCarousel() {
  const [currentReview, setCurrentReview] = React.useState(0);

  const reviews = [
    {
      name: 'John Smith',
      company: 'Tech Solutions Inc',
      text: 'Wildstone Solution delivered an exceptional website that exceeded all our expectations. Their team was professional, creative, and delivered on time!',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Travel Adventures Ltd',
      text: 'Outstanding service! The website they created for us has increased our bookings by 40%. Highly recommended for any business looking to go digital.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Hotel Paradise',
      text: 'The responsive design and user-friendly interface made all the difference. Our customers love the new booking system. Great work!',
      rating: 5
    },
    {
      name: 'Emma Williams',
      company: 'Digital News Today',
      text: 'Professional team with excellent communication. They understood our vision perfectly and created a news portal that works flawlessly. 5 stars!',
      rating: 5
    },
    {
      name: 'David Kumar',
      company: 'E-commerce Hub',
      text: 'Best decision we made for our business. The website is fast, secure, and beautifully designed. Wildstone Solution is truly the best in the industry.',
      rating: 5
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const review = reviews[currentReview];

  return (
    <div style={{ maxWidth: '800px', textAlign: 'center', width: '100%' }}>
      <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '48px', color: '#333333', marginBottom: '60px', fontWeight: '700' }}>Client Reviews</h2>
      
      <div style={{
        background: '#f9f9f9',
        padding: '50px 40px',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 'all 0.5s ease'
      }}>
        <div style={{ marginBottom: '25px', fontSize: '24px', letterSpacing: '5px' }}>
          {'⭐'.repeat(review.rating)}
        </div>

        <p style={{
          fontSize: '18px',
          color: '#333333',
          lineHeight: '1.8',
          marginBottom: '30px',
          fontStyle: 'italic',
          fontFamily: "'Georgia', serif"
        }}>
          "{review.text}"
        </p>

        <h3 style={{
          fontSize: '20px',
          color: '#28a745',
          fontWeight: '700',
          margin: '0 0 8px 0'
        }}>
          {review.name}
        </h3>

        <p style={{
          fontSize: '14px',
          color: '#999999',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          margin: 0,
          marginBottom: '30px'
        }}>
          {review.company}
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '30px'
        }}>
          {reviews.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentReview(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: currentReview === index ? '#28a745' : '#ddd',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (currentReview !== index) e.target.style.backgroundColor = '#b3e5b3';
              }}
              onMouseLeave={(e) => {
                if (currentReview !== index) e.target.style.backgroundColor = '#ddd';
              }}
            ></div>
          ))}
        </div>
      </div>

      <p style={{
        fontSize: '13px',
        color: '#999999',
        marginTop: '40px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Review {currentReview + 1} of {reviews.length} • Auto-rotates every 10 seconds
      </p>
    </div>
  );
}

function BlogPostDetail({ post, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      padding: '20px'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '8px',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 10px 50px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#28a745',
            color: '#ffffff',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#218838';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#28a745';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ×
        </button>

        {/* Featured Image */}
        <img 
          src={post.image} 
          alt={post.title}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover'
          }}
        />

        {/* Content */}
        <div style={{ padding: '50px 40px' }}>
          {/* Category */}
          <div style={{
            display: 'inline-block',
            background: '#28a745',
            color: '#ffffff',
            padding: '6px 15px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '20px'
          }}>
            {post.category}
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Georgia', serif",
            fontSize: '42px',
            color: '#333333',
            fontWeight: '700',
            marginBottom: '20px',
            margin: '0 0 20px 0',
            lineHeight: '1.3'
          }}>
            {post.title}
          </h1>

          {/* Meta Info */}
          <div style={{
            display: 'flex',
            gap: '30px',
            paddingBottom: '20px',
            borderBottom: '2px solid #e0e0e0',
            marginBottom: '30px',
            fontSize: '14px',
            color: '#666666'
          }}>
            <div>
              <strong style={{ color: '#333333' }}>By {post.author}</strong>
            </div>
            <div>{post.date}</div>
          </div>

          {/* Excerpt */}
          <p style={{
            fontSize: '18px',
            color: '#28a745',
            fontWeight: '600',
            marginBottom: '30px',
            fontStyle: 'italic',
            margin: '0 0 30px 0'
          }}>
            {post.excerpt}
          </p>

          {/* Full Content */}
          <div style={{
            fontSize: '16px',
            color: '#333333',
            lineHeight: '1.8',
            marginBottom: '30px'
          }}>
            <p style={{ margin: '0 0 20px 0' }}>
              {post.content[0]}
            </p>
            <p style={{ margin: '0 0 20px 0' }}>
              {post.content[1]}
            </p>
            <p style={{ margin: '0 0 20px 0' }}>
              {post.content[2]}
            </p>
            <p style={{ margin: '0 0 0 0' }}>
              {post.content[3]}
            </p>
          </div>

          {/* Share Section */}
          <div style={{
            paddingTop: '30px',
            borderTop: '2px solid #e0e0e0',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#999999',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '15px',
              margin: '0 0 15px 0'
            }}>
              Share This Post
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              {['Facebook', 'Twitter', 'LinkedIn'].map(social => (
                <button
                  key={social}
                  style={{
                    padding: '10px 20px',
                    background: '#f0f0f0',
                    color: '#333333',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#28a745';
                    e.target.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f0f0f0';
                    e.target.style.color = '#333333';
                  }}
                >
                  {social}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Web Design Trends 2026',
      excerpt: 'Explore the latest web design trends that are shaping the digital landscape. From minimalism to bold colors, discover what\'s in.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Hem Shrestha',
      date: 'June 5, 2026',
      category: 'Design',
      content: [
        'Web design is constantly evolving, and 2026 brings exciting new trends that designers and developers should be aware of. The industry is moving towards more personalized, interactive, and user-centric designs that prioritize both aesthetics and functionality.',
        'One of the biggest trends this year is the rise of neomorphism, a design style that sits somewhere between skeuomorphism and flat design. This approach uses subtle shadows and highlights to create a 3D effect while maintaining a clean, modern aesthetic. Another significant trend is the increased use of AI-powered design tools that help automate repetitive tasks and improve workflow efficiency.',
        'Mobile-first design continues to dominate, with responsive design becoming the absolute standard. Designers are also focusing more on accessibility, ensuring that websites are usable by everyone, regardless of their abilities. Dark mode options have become expected features on most websites, improving user experience and reducing eye strain.',
        'As we move forward, the integration of animation and micro-interactions will continue to enhance user engagement. Colors are becoming bolder and more expressive, breaking away from the minimalist trends of previous years. Video content is becoming an essential component of web design, with more websites incorporating background videos and interactive video elements.'
      ]
    },
    {
      id: 2,
      title: 'SEO Best Practices Guide',
      excerpt: 'Master the fundamentals of SEO and improve your website\'s ranking on search engines. Learn proven techniques that work.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Umesh Paneru',
      date: 'June 3, 2026',
      category: 'SEO',
      content: [
        'Search Engine Optimization (SEO) is crucial for any online business looking to improve its visibility and attract organic traffic. Whether you\'re running a blog, e-commerce store, or corporate website, understanding SEO fundamentals will help you rank higher in search results and reach your target audience.',
        'The foundation of SEO starts with keyword research. You need to understand what terms your potential customers are searching for and create content around those keywords. Tools like Google Keyword Planner, Ahrefs, and SEMrush can help you identify high-volume, low-competition keywords that are worth targeting.',
        'On-page SEO is equally important, which includes optimizing your title tags, meta descriptions, headings, and content. Make sure your content is well-structured, easy to read, and provides genuine value to your audience. Off-page SEO, such as building high-quality backlinks and social signals, also plays a significant role in improving your search rankings.',
        'Technical SEO cannot be overlooked. This includes improving your website\'s loading speed, fixing broken links, implementing SSL certificates, and ensuring your site is mobile-friendly. Regular monitoring and updates based on algorithm changes will help you maintain and improve your rankings over time.'
      ]
    },
    {
      id: 3,
      title: 'Building Responsive Websites',
      excerpt: 'Learn how to create websites that look great on all devices. A comprehensive guide to responsive web design principles.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Chiranjibi Shrestha',
      date: 'June 1, 2026',
      category: 'Development',
      content: [
        'Responsive web design is no longer optional—it\'s essential. With the majority of internet traffic coming from mobile devices, building websites that adapt seamlessly to different screen sizes is critical for user experience and SEO performance.',
        'The foundation of responsive design is the mobile-first approach, which means designing for mobile devices first and then scaling up to larger screens. This approach ensures that your website is optimized for the smallest devices and enhances the experience for users on larger screens.',
        'CSS media queries are the primary tool for implementing responsive design. By using breakpoints, you can define different styles for different screen sizes. Common breakpoints include 320px for mobile phones, 768px for tablets, and 1024px for desktops. However, it\'s important to design for your actual users, not just arbitrary breakpoints.',
        'Flexible grids, flexible images, and flexible media are the three pillars of responsive design. Using relative units like percentages instead of fixed pixels allows your layout to scale smoothly. Images should be scaled proportionally, and videos should be embedded responsibly. Testing on real devices and using browser developer tools will help ensure your website works perfectly across all platforms.'
      ]
    },
    {
      id: 4,
      title: 'User Experience Essentials',
      excerpt: 'Understand the core principles of UX design and how to create user-centric digital experiences that engage customers.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Priya Sharma',
      date: 'May 30, 2026',
      category: 'Design',
      content: [
        'User Experience (UX) is all about creating digital products that are easy to use, efficient, and delightful for users. Good UX design considers the entire user journey, from initial discovery to conversion and beyond. It\'s not just about making things look pretty; it\'s about solving user problems and meeting their needs.',
        'Understanding your users is the first step in creating good UX. Conduct user research through surveys, interviews, and usability testing to understand their pain points, goals, and behaviors. Create detailed user personas that represent your target audience and use these personas to guide your design decisions.',
        'Usability is a key component of UX. Your website or application should be intuitive and easy to navigate. Users should be able to accomplish their goals without confusion or frustration. Consistency in design elements, clear call-to-action buttons, and logical information architecture are essential for good usability.',
        'Accessibility is another crucial aspect of UX that is often overlooked. Design for users with disabilities by ensuring your website is accessible to people with visual, hearing, motor, and cognitive impairments. This includes using proper color contrast, keyboard navigation, alt text for images, and semantic HTML. By making your website accessible, you\'re not only helping people with disabilities but also improving the overall user experience for everyone.'
      ]
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      excerpt: 'Develop a comprehensive digital marketing strategy to grow your business online. Tips and tactics from industry experts.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Rahul Kumar',
      date: 'May 28, 2026',
      category: 'Marketing',
      content: [
        'Digital marketing has become essential for businesses of all sizes. With billions of people using the internet daily, digital channels provide unprecedented opportunities to reach and engage your target audience. A comprehensive digital marketing strategy combines multiple channels to achieve your business goals.',
        'Content marketing is the foundation of any digital marketing strategy. Creating valuable, relevant content that addresses your audience\'s pain points and interests helps build trust and establish your authority in your industry. Blog posts, videos, infographics, and podcasts are all effective content formats that can drive traffic and engagement.',
        'Social media marketing allows you to connect directly with your audience on platforms where they spend their time. Whether it\'s Facebook, Instagram, LinkedIn, or TikTok, each platform has its own audience and best practices. Consistent posting, engagement with followers, and paid advertising can significantly amplify your reach.',
        'Email marketing remains one of the most effective digital marketing channels with high ROI. Building an email list and sending targeted campaigns helps you nurture leads and maintain relationships with existing customers. Combining email marketing with social media, content marketing, and SEO creates a powerful, integrated approach to digital marketing that drives sustainable business growth.'
      ]
    },
    {
      id: 6,
      title: 'E-Commerce Website Setup',
      excerpt: 'Complete guide to setting up an e-commerce website. From choosing platforms to payment integration and optimization.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Aarav Patel',
      date: 'May 25, 2026',
      category: 'E-Commerce',
      content: [
        'Starting an e-commerce business online has never been more accessible. With various platforms and tools available, anyone can set up an online store and start selling products globally. However, success requires careful planning and execution of both technical and business aspects.',
        'Choosing the right e-commerce platform is critical. Popular options include Shopify, WooCommerce, Magento, and BigCommerce, each with different features, pricing, and scalability options. Consider your budget, technical expertise, and long-term growth plans when selecting a platform.',
        'Product photography and descriptions are crucial for converting browsers into buyers. High-quality images from multiple angles, detailed product descriptions with benefits and specifications, and clear pricing information help customers make informed purchase decisions. User reviews and ratings also build trust and increase conversion rates.',
        'Payment processing and security are paramount in e-commerce. Integrate secure payment gateways like Stripe, PayPal, or Square to accept credit cards and other payment methods. Implement SSL certificates, PCI compliance, and fraud detection to protect customer data. Don\'t forget about shipping integration, inventory management, and customer service tools to ensure smooth operations and customer satisfaction.'
      ]
    },
    {
      id: 7,
      title: 'Content Writing Tips',
      excerpt: 'Master the art of writing compelling web content that converts visitors into customers. Practical tips for better content.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Maya Singh',
      date: 'May 22, 2026',
      category: 'Content',
      content: [
        'Writing compelling web content is both an art and a science. Unlike traditional writing, web content needs to be scannable, concise, and optimized for both search engines and human readers. The best web content balances SEO requirements with engaging storytelling that resonates with your audience.',
        'Start with a clear headline that captures attention and includes your primary keyword. Your headline should communicate the value proposition and encourage clicks. Follow with a compelling introduction that hooks the reader and clearly states what they\'ll learn or gain from reading the content.',
        'Structure your content with short paragraphs, subheadings, and bullet points to improve readability. People scan web content rather than reading every word, so use formatting to guide them through your message. Use data, statistics, and case studies to support your claims and add credibility.',
        'Always keep your audience in mind. Write in a conversational tone that feels natural and relatable. Use active voice whenever possible, and avoid jargon unless you\'re writing for a specialized audience. Include a clear call-to-action that tells readers exactly what you want them to do next. Finally, proofread carefully for grammar and spelling errors, as these can hurt your credibility and SEO performance.'
      ]
    },
    {
      id: 8,
      title: 'Mobile App Development',
      excerpt: 'Everything you need to know about developing mobile applications. React Native, Flutter, and native development comparison.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Netra Lal Bagale',
      date: 'May 20, 2026',
      category: 'Development',
      content: [
        'Mobile app development has become crucial as more people access the internet through smartphones and tablets. Whether you\'re building for iOS, Android, or both, understanding the different development approaches and technologies available will help you make informed decisions.',
        'Native app development (iOS with Swift or Android with Kotlin) offers the best performance and access to device features. However, it requires separate codebases for each platform, which increases development time and cost. Native apps provide the best user experience but require specialized skills and longer development cycles.',
        'Cross-platform frameworks like React Native and Flutter have gained popularity because they allow developers to write code once and deploy to multiple platforms. React Native uses JavaScript and has a large community, while Flutter uses Dart and offers excellent performance and beautiful UI components. These frameworks reduce development costs and time-to-market.',
        'Regardless of the approach you choose, focus on user experience, performance optimization, and security. Test your app thoroughly on various devices and screen sizes. Implement analytics to understand user behavior and continuously iterate based on feedback. Regular updates and maintenance are essential for keeping your app competitive and secure in a constantly evolving mobile landscape.'
      ]
    },
    {
      id: 9,
      title: 'Website Security Essentials',
      excerpt: 'Protect your website from cyber threats. Essential security practices and tools to keep your site and users safe.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Hem Shrestha',
      date: 'May 18, 2026',
      category: 'Security',
      content: [
        'Website security is not an afterthought—it\'s a fundamental requirement for any online presence. Cyber threats are constantly evolving, and websites are frequent targets for attacks. Protecting your website and user data is essential for maintaining trust and complying with regulations.',
        'SSL/TLS certificates are the foundation of website security. They encrypt data transmitted between your website and visitors\' browsers, protecting sensitive information like passwords and payment details. An SSL certificate is now a ranking factor for Google, so it\'s important for both security and SEO.',
        'Keep all software, plugins, and frameworks up to date. Outdated software contains known vulnerabilities that attackers can exploit. Implement strong authentication mechanisms, such as two-factor authentication, to protect against unauthorized access. Use security plugins and regular vulnerability scanning to identify and fix security issues before they\'re exploited.',
        'Regular backups are crucial in case of attacks or data loss. Implement a robust backup strategy that stores copies of your website and data in secure locations. Monitor your website for suspicious activity using security monitoring tools and logs. Train your team on security best practices, including password management and phishing awareness. By taking a proactive approach to security, you can significantly reduce the risk of becoming a victim of cyber attacks.'
      ]
    }
  ];

  const portfolioItems = [
    { title: 'Shreeban Nature Camp', category: 'HOTEL', image: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Dhading Post', category: 'NEWS', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Kiwani ASPAC', category: 'OTHERS', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Travel Agency Website', category: 'TRAVEL', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Mountain Resort', category: 'HOTEL', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Digital News Platform', category: 'NEWS', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Luxury Hotel Booking', category: 'HOTEL', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Travel Blog', category: 'TRAVEL', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Event Management', category: 'OTHERS', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  const filteredItems = activeFilter === 'ALL' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      {selectedBlogPost && (
        <BlogPostDetail 
          post={selectedBlogPost} 
          onClose={() => setSelectedBlogPost(null)}
        />
      )}
      
      {/* HEADER */}
      <header style={{
        background: '#f5f5f5',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => scrollToSection('home')}>
            <span style={{ fontFamily: "'Georgia', serif", fontSize: '32px', color: '#000000', fontWeight: '700', margin: 0 }}>Wildstone</span>
            <span style={{ fontSize: '13px', color: '#28a745', fontWeight: '600', textTransform: 'uppercase', margin: 0 }}>Solution</span>
          </div>

          <nav style={{ flex: 1, marginLeft: '60px' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '30px', margin: 0, padding: 0 }}>
              {[
                { label: 'HOME', id: 'home' },
                { label: 'ABOUT', id: 'about' },
                { label: 'SERVICES', id: 'services' },
                { label: 'PORTFOLIO', id: 'portfolio' },
                { label: 'REVIEWS', id: 'reviews' },
                { label: 'OUR TEAM', id: 'team' },
                { label: 'BLOG', id: 'blog' },
                { label: 'CONTACT', id: 'contact' }
              ].map(item => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} style={{
                    fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px',
                    color: activeSection === item.id ? '#28a745' : '#333333',
                    paddingBottom: '5px', borderBottom: activeSection === item.id ? '2px solid #28a745' : '2px solid transparent',
                    background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#28a745'; e.target.style.borderBottomColor = '#28a745'; }}
                  onMouseLeave={(e) => { if (activeSection !== item.id) { e.target.style.color = '#333333'; e.target.style.borderBottomColor = 'transparent'; }}}
                  >{item.label}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* HOME SECTION */}
      <section id="home" style={{
        position: 'relative', height: '100vh', minHeight: '700px',
        background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
        display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '1000px', zIndex: 2, position: 'relative', padding: '40px 20px' }}>
          <h1 style={{ fontFamily: "'Georgia', serif", fontSize: '70px', fontWeight: '700', color: '#ffffff', marginBottom: '30px', textShadow: '3px 3px 12px rgba(0, 0, 0, 0.7)', margin: '0 0 30px 0' }}>
            Welcome to Wildstone Solution
          </h1>
          <p style={{ fontSize: '28px', color: '#ffffff', fontWeight: '400', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', margin: '0 0 55px 0' }}>
            Professional web design & development company
          </p>
          <button onClick={() => scrollToSection('portfolio')} style={{
            padding: '16px 48px', border: '2px solid #d4a017', backgroundColor: 'transparent', color: '#d4a017',
            fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#d4a017'; e.target.style.color = '#ffffff'; e.target.style.boxShadow = '0 10px 30px rgba(212, 160, 23, 0.6)'; }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#d4a017'; e.target.style.boxShadow = 'none'; }}
          >VISIT OUR PORTFOLIO</button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={{ padding: '80px 40px', background: '#ffffff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '48px', color: '#333333', marginBottom: '30px', fontWeight: '700' }}>Our primary objective is to provide valuable solutions to your ideas through web.</h2>
          <h3 style={{ fontSize: '32px', color: '#333333', marginBottom: '40px', fontWeight: '400' }}>Let us shape your ideas better. Make your website better.</h3>
          <div style={{ width: '80px', height: '4px', background: '#28a745', margin: '40px auto', borderRadius: '2px' }}></div>
          <p style={{ fontSize: '18px', color: '#666666', lineHeight: '1.8', marginBottom: '50px' }}>WildStone Solution is a professional website development and responsive web design company in Kathmandu Nepal, offering affordable web design services for the global entrepreneurs.</p>
          <button style={{
            padding: '14px 45px', backgroundColor: '#28a745', color: '#ffffff', border: 'none',
            fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '4px', transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#218838'; e.target.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#28a745'; e.target.style.transform = 'translateY(0)'; }}
          >Know more about us</button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" style={{
        padding: '80px 40px',
        background: `linear-gradient(rgba(200, 200, 200, 0.3), rgba(200, 200, 200, 0.3)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '44px', color: '#333333', marginBottom: '80px', fontWeight: '700', textAlign: 'center' }}>Let us shape your ideas better. Make your website better.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px 50px' }}>
            {[
              { title: 'Domain & Hosting', icon: '🖥️', items: ['Top level Domains', 'Free .np Domains', 'Reasonable Web Hosting', 'SSL Installation', 'Email Hosting'] },
              { title: 'Web Design & Development', icon: '👁️', items: ['Creative Web UI', 'Responsive Design', 'PSD to XHTML Conversion'] },
              { title: 'Graphic Artworks', icon: '💡', items: ['Illustration', 'Concept Design', 'UI Designs', 'Brand Identity', 'Logo Design'] },
              { title: 'SEO & Marketing', icon: '📋', items: ['On-Page SEO', 'Free Audit', 'Content Management', 'Social Media Marketing', 'AdWork'] },
              { title: 'Help & Maintenance', icon: '❓', items: ['Malware Detection', 'Performance Monitoring', '24/7 Support'] },
              { title: 'Content Writing', icon: '✏️', items: ['SEO Writing', 'Content Editing', 'Proofreading', 'Technical Writing', 'Copy Writing'] }
            ].map((service, index) => (
              <div key={index} style={{ padding: '30px', background: 'rgba(255, 255, 255, 0.95)', borderRadius: '4px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ fontSize: '48px', marginBottom: '15px', textAlign: 'center' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', color: '#333333', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>{service.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.items.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '14px', color: '#333333', lineHeight: '1.8', marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" style={{ padding: '80px 40px', background: '#ffffff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '48px', color: '#333333', marginBottom: '20px', fontWeight: '700', textAlign: 'center' }}>Our Portfolio</h2>
          <div style={{ width: '80px', height: '4px', background: '#28a745', margin: '0 auto 60px', borderRadius: '2px' }}></div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '60px', flexWrap: 'wrap' }}>
            {['ALL', 'HOTEL', 'NEWS', 'OTHERS', 'TRAVEL'].map(filter => (
              <button key={filter} onClick={() => setActiveFilter(filter)} style={{
                padding: '10px 25px',
                backgroundColor: activeFilter === filter ? '#28a745' : '#ffffff',
                color: activeFilter === filter ? '#ffffff' : '#666666',
                border: '1px solid #e0e0e0', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase',
                cursor: 'pointer', borderRadius: '4px', transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { if (activeFilter !== filter) { e.target.style.backgroundColor = '#28a745'; e.target.style.color = '#ffffff'; } }}
              onMouseLeave={(e) => { if (activeFilter !== filter) { e.target.style.backgroundColor = '#ffffff'; e.target.style.color = '#666666'; } }}
              >{filter}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {filteredItems.map((project, index) => (
              <div key={index} style={{ background: '#f9f9f9', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'; }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '25px 20px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '20px', color: '#333333', fontWeight: '700', margin: '0 0 10px 0' }}>{project.title}</h3>
                  <p style={{ fontSize: '13px', color: '#999999', textTransform: 'uppercase', margin: 0 }}>{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" style={{ padding: '80px 40px', background: '#ffffff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReviewsCarousel />
      </section>

      {/* TEAM SECTION */}
      <section id="team" style={{ padding: '80px 40px', background: '#f9f9f9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '48px', color: '#333333', marginBottom: '20px', fontWeight: '700', textAlign: 'center' }}>Our Team</h2>
          <div style={{ width: '80px', height: '4px', background: '#28a745', margin: '0 auto 80px', borderRadius: '2px' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {[
              { name: 'Hem Shrestha', position: 'Founder / Project Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Netra Lal Bagale', position: 'COO / Sr. Web Designer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Chiranjibi Shrestha', position: 'Web Developer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Umesh Paneru', position: 'SEO Specialist', image: 'https://images.unsplash.com/photo-1539571696357-5a69c006ae1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Priya Sharma', position: 'UI/UX Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Aarav Patel', position: 'Full Stack Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Maya Singh', position: 'Content Writer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Rahul Kumar', position: 'Digital Marketer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
            ].map((member, index) => (
              <div key={index} style={{ textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ width: '100%', paddingBottom: '100%', position: 'relative', overflow: 'hidden', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                  <img src={member.image} alt={member.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
                  />
                </div>
                <h3 style={{ fontSize: '20px', color: '#333333', fontWeight: '700', margin: '0 0 8px 0' }}>{member.name}</h3>
                <p style={{ fontSize: '14px', color: '#28a745', fontWeight: '600', textTransform: 'uppercase', margin: 0 }}>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" style={{ padding: '80px 40px', background: '#ffffff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '48px', color: '#333333', marginBottom: '20px', fontWeight: '700', textAlign: 'center' }}>Latest Blog Posts</h2>
          <div style={{ width: '80px', height: '4px', background: '#28a745', margin: '0 auto 80px', borderRadius: '2px' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {blogPosts.map((post) => (
              <div key={post.id} style={{
                background: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: '#28a745',
                    color: '#ffffff',
                    padding: '6px 15px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {post.category}
                  </div>
                </div>

                <div style={{ padding: '30px' }}>
                  <h3 style={{
                    fontSize: '22px',
                    color: '#333333',
                    fontWeight: '700',
                    margin: '0 0 12px 0',
                    lineHeight: '1.4'
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: '#666666',
                    lineHeight: '1.6',
                    margin: '0 0 20px 0'
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '15px',
                    borderTop: '1px solid #e0e0e0',
                    marginBottom: '15px',
                    fontSize: '12px',
                    color: '#999999'
                  }}>
                    <div>
                      <div style={{ marginBottom: '5px' }}><strong>{post.author}</strong></div>
                      <div>{post.date}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedBlogPost(post)}
                    style={{
                      width: '100%',
                      padding: '12px 20px',
                      background: '#28a745',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#218838';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#28a745';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ padding: '80px 40px', background: '#f9f9f9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '1000px', textAlign: 'center', width: '100%' }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '48px', color: '#333333', marginBottom: '60px', fontWeight: '700' }}>Contact Us</h2>
          <p style={{ fontSize: '18px', color: '#666666', lineHeight: '1.8', marginBottom: '40px' }}>Get in touch with us for your web design and development needs.</p>
          <form style={{ maxWidth: '500px', margin: '0 auto' }}>
            <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }} />
            <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }} />
            <textarea placeholder="Your Message" rows="5" style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', resize: 'vertical', boxSizing: 'border-box' }}></textarea>
            <button type="submit" style={{
              padding: '14px 45px', backgroundColor: '#28a745', color: '#ffffff', border: 'none',
              fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '4px', transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = '#218838'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = '#28a745'; e.target.style.transform = 'translateY(0)'; }}
            >Send Message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#333333', padding: '40px 0', borderTop: '1px solid rgba(40, 167, 69, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
          <p style={{ fontSize: '13px', color: '#999999', margin: 0 }}>&copy; 2024 Wildstone Solution. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '45px' }}>
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => (
              <a key={social} href={`#${social}`} style={{ fontSize: '12px', color: '#999999', textDecoration: 'none', textTransform: 'uppercase', cursor: 'pointer', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => e.target.style.color = '#28a745'}
              onMouseLeave={(e) => e.target.style.color = '#999999'}
              >{social}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}