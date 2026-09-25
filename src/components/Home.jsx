import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const articles = [
    {
      id: 1,
      slug: 'mastering-golden-hour-photography',
      title: 'إتقان تصوير الساعة الذهبية: دليل شامل',
      description: 'تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.',
      category: 'إضاءة',
      readTime: '8 دقائق للقراءة',
      author: 'سالم أحمد',
      date: '١٥ يناير ٢٠٢٦',
      image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      delay: '0ms'
    },
    {
      id: 2,
      slug: 'portrait-photography-secrets',
      title: 'أسرار تصوير البورتريه: كيف تلتقط روح الشخصية',
      description: 'اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.',
      category: 'بورتريه',
      readTime: '6 دقائق للقراءة',
      author: 'محمد علي',
      date: '١٢ يناير ٢٠٢٦',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      delay: '150ms'
    },
    {
      id: 3,
      slug: 'landscape-photography-guide',
      title: 'دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف',
      description: 'استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.',
      category: 'مناظر طبيعية',
      readTime: '10 دقائق للقراءة',
      author: 'إبراهيم حسن',
      date: '١٠ يناير ٢٠٢٦',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      delay: '300ms'
    }
  ];

  const categories = [
    { name: 'إضاءة', count: '3 مقالة', icon: 'fa-sun', link: '/blog?category=إضاءة', delay: '0ms' },
    { name: 'بورتريه', count: '3 مقالة', icon: 'fa-user', link: '/blog?category=بورتريه', delay: '100ms' },
    { name: 'مناظر طبيعية', count: '2 مقالة', icon: 'fa-mountain-sun', link: '/blog?category=مناظر طبيعية', delay: '200ms' },
    { name: 'تقنيات', count: '5 مقالة', icon: 'fa-sliders', link: '/blog?category=تقنيات', delay: '300ms' },
    { name: 'معدات', count: '3 مقالة', icon: 'fa-sun', link: '/blog?category=معدات', delay: '400ms' }
  ];

  const latestArticles = [
    {
      id: 1,
      slug: 'camera-settings-basics',
      title: 'أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي',
      description: 'افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.',
      category: 'تقنيات',
      readTime: '7 دقائق للقراءة',
      date: '٨ يناير ٢٠٢٦',
      author: 'داود خالد',
      authorRole: 'مدرب تصوير',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      delay: '0ms'
    },
    {
      id: 2,
      slug: 'photo-composition-rules',
      title: 'قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية',
      description: 'تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.',
      category: 'تقنيات',
      readTime: '9 دقائق للقراءة',
      date: '٥ يناير ٢٠٢٦',
      author: 'ليث محمود',
      authorRole: 'فنان بصري',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop',
      authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
      delay: '100ms'
    },
    {
      id: 3,
      slug: 'mobile-photography-tips',
      title: 'تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك',
      description: 'اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.',
      category: 'معدات',
      readTime: '8 دقائق للقراءة',
      date: '٣ يناير ٢٠٢٦',
      author: 'جمال عبدالله',
      authorRole: 'مصور ومراجع تقني',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
      authorImage: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face',
      delay: '200ms'
    }
  ];

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <>
      القسم الرئيسي (Hero Section)
      <section 
        className="position-relative d-flex align-items-center overflow-hidden"
        style={{ backgroundColor: '#0a0a0a', minHeight: '90vh' }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(38, 38, 38, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(38, 38, 38, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="position-relative container py-5 my-5">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10 col-xl-9">
              <div className="section-label d-inline-flex align-items-center gap-2 mb-4 animate-fade-in px-3 py-1 rounded-pill border border-secondary-subtle bg-dark text-white">
                <span className="position-relative d-inline-flex" style={{ width: '8px', height: '8px' }}>
                  <span className="animate-ping position-absolute d-inline-flex h-100 w-100 rounded-circle bg-warning opacity-75"></span>
                  <span className="position-relative d-inline-flex rounded-circle h-100 w-100 bg-warning"></span>
                </span>
                <span className="small text-light">مرحباً بك في عدسة</span>
              </div>

              <h1 className="display-3 fw-bold text-white mb-4 lh-sm">
                اكتشف <span className="gradient-text">فن</span><br />
                التصوير الفوتوغرافي
              </h1>

              <p className="fs-5 text-secondary mb-5 mx-auto lh-base" style={{ maxWidth: '650px' }}>
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
                <Link 
                  to="/blog" 
                  className="btn btn-primary d-inline-flex align-items-center justify-content-center gap-2 py-3 px-4 fw-medium text-white border-0 group"
                  style={{ backgroundColor: '#f97316' }}
                >
                  <span>استكشف المقالات</span>
                  <svg 
                    className="transition-transform group-hover-translate" 
                    width="20" 
                    height="20" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ transform: 'rotate(180deg)' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>

                <Link 
                  to="/about" 
                  className="btn btn-outline-secondary d-inline-flex align-items-center justify-content-center gap-2 py-3 px-4 text-white border-secondary-subtle"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>اعرف المزيد</span>
                </Link>
              </div>

              <div className="row g-3 justify-content-center mx-auto" style={{ maxWidth: '800px' }}>
                <div className="col-6 col-md-3">
                  <div className="glass-card p-3 rounded-4 border border-secondary-subtle text-center hover-scale transition" style={{ backgroundColor: 'rgba(22, 22, 22, 0.6)', animationDelay: '0ms' }}>
                    <i className="fa-solid fa-newspaper fs-4 text-warning mb-2 d-block"></i>
                    <p className="fs-3 fw-bold gradient-text mb-0">+50</p>
                    <p className="text-secondary small mb-0">مقالة</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="glass-card p-3 rounded-4 border border-secondary-subtle text-center hover-scale transition" style={{ backgroundColor: 'rgba(22, 22, 22, 0.6)', animationDelay: '100ms' }}>
                    <i className="fa-solid fa-users fs-4 text-warning mb-2 d-block"></i>
                    <p className="fs-3 fw-bold gradient-text mb-0">+10ألف</p>
                    <p className="text-secondary small mb-0">قارئ</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="glass-card p-3 rounded-4 border border-secondary-subtle text-center hover-scale transition" style={{ backgroundColor: 'rgba(22, 22, 22, 0.6)', animationDelay: '200ms' }}>
                    <i className="fa-solid fa-folder-open fs-4 text-warning mb-2 d-block"></i>
                    <p className="fs-3 fw-bold gradient-text mb-0">4</p>
                    <p className="text-secondary small mb-0">تصنيفات</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="glass-card p-3 rounded-4 border border-secondary-subtle text-center hover-scale transition" style={{ backgroundColor: 'rgba(22, 22, 22, 0.6)', animationDelay: '300ms' }}>
                    <i className="fa-solid fa-pen-nib fs-4 text-warning mb-2 d-block"></i>
                    <p className="fs-3 fw-bold gradient-text mb-0">6</p>
                    <p className="text-secondary small mb-0">كاتب</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم مقالات مختارة */}
      <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        <div 
          className="position-absolute top-0 end-0 w-25 h-100" 
          style={{ 
            background: 'linear-gradient(to left, rgba(249, 115, 22, 0.05), transparent)', 
            pointerEvents: 'none' 
          }}
        />

        <div className="container position-relative py-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-3">
            <div>
              <div className="d-inline-flex align-items-center gap-2 mb-2 px-3 py-1 rounded-pill bg-dark border border-secondary-subtle">
                <span className="position-relative d-inline-flex" style={{ width: '8px', height: '8px' }}>
                  <span className="animate-ping position-absolute d-inline-flex h-100 w-100 rounded-circle bg-warning opacity-75"></span>
                  <span className="position-relative d-inline-flex rounded-circle h-100 w-100 bg-warning"></span>
                </span>
                <span className="small text-white fw-medium">مميز</span>
              </div>
              <h2 className="fs-1 fw-bold text-white mb-2">مقالات مختارة</h2>
              <p className="text-secondary mb-0" style={{ maxWidth: '500px' }}>محتوى منتقى لبدء رحلة تعلمك</p>
            </div>

            <Link 
              to="/blog" 
              className="btn text-white fw-medium d-inline-flex align-items-center gap-2 px-4 py-2 rounded-3 border-0 transition"
              style={{ background: 'linear-gradient(to right, #f97316, #ea580c)' }}
            >
              <span>عرض الكل</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <div className="d-flex flex-column gap-4">
            {articles.map((article) => (
              <article  
                key={article.id}
                className="group position-relative rounded-4 overflow-hidden border border-secondary-subtle transition-all"
                style={{ backgroundColor: '#161616', animationDelay: article.delay }}
              >
                <Link to={`/articledetails`} className="text-decoration-none text-reset d-block" state={{ article: article }}>
                  <div className="row g-0">
                    <div className="col-12 col-md-6 position-relative overflow-hidden" style={{ minHeight: '300px' }}>
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-100 h-100 object-fit-cover transition-transform duration-700"
                      />
                      <div className="position-absolute top-0 start-0 m-3">
                        <span 
                          className="d-inline-flex align-items-center gap-1 px-3 py-1 text-white small fw-semibold rounded-pill shadow-sm"
                          style={{ background: 'linear-gradient(to right, #f97316, #eab308)', fontSize: '0.75rem' }}
                        >
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          مميز
                        </span>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 p-4 p-md-5 d-flex flex-column justify-content-center" style={{ backgroundColor: '#161616' }}>
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <span 
                          className="px-3 py-1 rounded-pill small fw-semibold"
                          style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#f97316', border: '1px solid rgba(249, 115, 22, 0.2)', fontSize: '0.75rem' }}
                        >
                          {article.category}
                        </span>
                        <span className="d-flex align-items-center gap-1 small text-secondary">
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {article.readTime}
                        </span>
                      </div>

                      <h2 className="fs-3 fw-bold text-white mb-3 lh-sm transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-secondary mb-4 lh-base text-truncate-3" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {article.description}
                      </p>

                      <div className="d-flex align-items-center justify-content-between mt-auto pt-2">
                        <div className="d-flex align-items-center gap-3">
                          <div className="position-relative">
                            <img 
                              src={article.authorImage} 
                              alt={article.author} 
                              className="rounded-circle object-fit-cover border border-secondary"
                              style={{ width: '48px', height: '48px' }}
                            />
                            <div 
                              className="position-absolute rounded-circle border border-dark"
                              style={{ width: '14px', height: '14px', backgroundColor: '#f97316', bottom: '-2px', start: '-2px' }}
                            ></div>
                          </div>
                          <div>
                            <p className="small fw-semibold text-white mb-0">{article.author}</p>
                            <p className="extra-small text-secondary mb-0" style={{ fontSize: '0.75rem' }}>{article.date}</p>
                          </div>
                        </div>

                        <span className="d-inline-flex align-items-center gap-2 text-warning fw-semibold small">
                          اقرأ المقال
                          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* قسم التصنيفات */}
      <section 
        className="py-5 position-relative border-top border-bottom border-secondary-subtle"
        style={{ backgroundColor: '#111111' }}
      >
        <div className="container py-4">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill bg-dark border border-secondary-subtle">
              <span className="position-relative d-inline-flex" style={{ width: '8px', height: '8px' }}>
                <span className="animate-ping position-absolute d-inline-flex h-100 w-100 rounded-circle bg-warning opacity-75"></span>
                <span className="position-relative d-inline-flex rounded-circle h-100 w-100 bg-warning"></span>
              </span>
              <span className="small text-white fw-medium">التصنيفات</span>
            </div>
            <h2 className="fs-1 fw-bold text-white mb-2">استكشف حسب الموضوع</h2>
            <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '500px' }}>
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>

          <div className="row g-3 g-md-4 justify-content-center">
            {categories.map((cat, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <Link 
                  to={cat.link}
                  className="group position-relative d-block p-4 rounded-4 text-decoration-none border border-secondary-subtle overflow-hidden hover-scale transition-all"
                  style={{ 
                    backgroundColor: '#161616', 
                    animationDelay: cat.delay 
                  }}
                >
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100 opacity-0 group-hover-opacity transition"
                    style={{ background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(234, 179, 8, 0.15))' }}
                  />

                  <div className="position-relative z-1">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-3 mb-3 transition"
                      style={{ 
                        width: '48px', 
                        height: '48px', 
                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                        border: '1px solid rgba(249, 115, 22, 0.2)' 
                      }}
                    >
                      <i className={`fa-solid ${cat.icon} fs-5 text-warning`}></i>
                    </div>

                    <h3 className="fs-5 fw-bold text-white mb-1">{cat.name}</h3>
                    <p className="small text-secondary mb-0">{cat.count}</p>

                    <div 
                      className="position-absolute top-0 end-0 d-flex align-items-center justify-content-center rounded-circle opacity-0 group-hover-opacity transition"
                      style={{ width: '32px', height: '32px', backgroundColor: '#262626' }}
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-white" style={{ transform: 'rotate(180deg)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم أحدث المقالات */}
      <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        <div 
          className="position-absolute bottom-0 start-0 w-25 h-100" 
          style={{ 
            background: 'linear-gradient(to right, rgba(249, 115, 22, 0.05), transparent)', 
            pointerEvents: 'none' 
          }}
        />

        <div className="container position-relative py-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-3">
            <div>
              <div className="d-inline-flex align-items-center gap-2 mb-2 px-3 py-1 rounded-pill bg-dark border border-secondary-subtle">
                <span className="position-relative d-inline-flex" style={{ width: '8px', height: '8px' }}>
                  <span className="animate-ping position-absolute d-inline-flex h-100 w-100 rounded-circle bg-warning opacity-75"></span>
                  <span className="position-relative d-inline-flex rounded-circle h-100 w-100 bg-warning"></span>
                </span>
                <span className="small text-white fw-medium">الأحدث</span>
              </div>
              <h2 className="fs-1 fw-bold text-white mb-2">أحدث المقالات</h2>
              <p className="text-secondary mb-0" style={{ maxWidth: '500px' }}>محتوى جديد طازج من المطبعة</p>
            </div>

            <Link 
              to="/blog" 
              className="text-warning fw-semibold text-decoration-none d-inline-flex align-items-center gap-2 transition"
            >
              <span>عرض جميع المقالات</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>

          <div className="row g-4">
            {latestArticles.map((article) => (
              <div key={article.id} className="col-12 col-md-6 col-lg-4">
                <article 
                  className="card h-100 border-0 rounded-4 overflow-hidden group"
                  style={{ backgroundColor: '#161616', animationDelay: article.delay }}
                >
                  <Link to={`/articledetails`} className="text-decoration-none text-reset d-flex flex-column h-100" state={{ article: article }}>
                    <div className="position-relative overflow-hidden" style={{ height: '210px' }}>
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-100 h-100 object-fit-cover transition-transform duration-700"
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <span 
                          className="px-3 py-1 text-white extra-small fw-semibold rounded-pill border border-secondary"
                          style={{ backgroundColor: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(4px)', fontSize: '0.75rem' }}
                        >
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="d-flex align-items-center gap-2 text-secondary small mb-3">
                        <span className="d-flex align-items-center gap-1">
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {article.readTime}
                        </span>
                        <span className="rounded-circle bg-secondary d-inline-block" style={{ width: '4px', height: '4px' }}></span>
                        <span>{article.date}</span>
                      </div>

                      <h3 className="fs-5 fw-bold text-white mb-2 lh-snug transition-colors">
                        {article.title}
                      </h3>

                      <p 
                        className="text-secondary small mb-4 lh-base" 
                        style={{ 
                          display: '-webkit-box', 
                          WebkitLineClamp: 2, 
                          WebkitBoxOrient: 'vertical', 
                          overflow: 'hidden' 
                        }}
                      >
                        {article.description}
                      </p>

                      <div className="d-flex align-items-center justify-content-between pt-3 mt-auto border-top border-secondary-subtle">
                        <div className="d-flex align-items-center gap-3">
                          <img 
                            src={article.authorImage} 
                            alt={article.author} 
                            className="rounded-circle object-fit-cover border border-secondary"
                            style={{ width: '36px', height: '36px' }}
                          />
                          <div>
                            <p className="small fw-medium text-white mb-0">{article.author}</p>
                            <p className="extra-small text-secondary mb-0" style={{ fontSize: '0.75rem' }}>{article.authorRole}</p>
                          </div>
                        </div>

                        <div 
                          className="d-flex align-items-center justify-content-center rounded-circle border transition"
                          style={{ 
                            width: '32px', 
                            height: '32px', 
                            backgroundColor: 'rgba(249, 115, 22, 0.1)', 
                            borderColor: 'rgba(249, 115, 22, 0.2)' 
                          }}
                        >
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-warning" style={{ transform: 'rotate(180deg)' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الاشتراك في النشرة الإخبارية */}
      <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        <div 
          className="position-absolute top-0 start-50 translate-middle-x rounded-circle pointer-events-none" 
          style={{ 
            width: '600px', 
            height: '300px', 
            backgroundColor: 'rgba(249, 115, 22, 0.1)', 
            filter: 'blur(90px)' 
          }} 
        />

        <div className="container position-relative py-4" style={{ maxWidth: '960px' }}>
          <div 
            className="rounded-4 border border-secondary-subtle p-4 p-md-5 text-center shadow-lg" 
            style={{ backgroundColor: '#161616' }}
          >
            <div 
              className="d-flex align-items-center justify-content-center mx-auto mb-4 rounded-4"
              style={{ 
                width: '64px', 
                height: '64px', 
                background: 'linear-gradient(135deg, #f97316, #ea580c)' 
              }}
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>

            <h2 className="fs-2 fw-bold text-white mb-3">
              اشترك في <span style={{ background: 'linear-gradient(to right, #f97316, #eab308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>نشرتنا الإخبارية</span>
            </h2>
            <p className="text-secondary fs-5 mb-4 mx-auto" style={{ maxWidth: '576px' }}>
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>

            <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2 mx-auto mb-4" style={{ maxWidth: '512px' }}>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني" 
                className="form-control form-control-lg bg-dark text-white border-secondary-subtle rounded-3 px-4 shadow-none"
                style={{ backgroundColor: '#0a0a0a', fontSize: '0.95rem' }}
              />
              <button 
                type="submit" 
                className="btn btn-lg text-white fw-semibold rounded-3 px-4 text-nowrap border-0 transition"
                style={{ background: 'linear-gradient(to right, #f97316, #ea580c)', fontSize: '0.95rem' }}
              >
                اشترك الآن
              </button>
            </form>

            <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 text-secondary small">
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex" style={{ marginRight: '8px' }}>
                  <img 
                    className="rounded-circle border border-2 border-dark" 
                    style={{ width: '32px', height: '32px', objectFit: 'cover', marginLeft: '-8px' }} 
                    alt="مشترك" 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" 
                  />
                  <img 
                    className="rounded-circle border border-2 border-dark" 
                    style={{ width: '32px', height: '32px', objectFit: 'cover', marginLeft: '-8px' }} 
                    alt="مشترك" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                  />
                  <img 
                    className="rounded-circle border border-2 border-dark" 
                    style={{ width: '32px', height: '32px', objectFit: 'cover', marginLeft: '-8px' }} 
                    alt="مشترك" 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" 
                  />
                </div>
                <span>انضم إلى <strong>+2,000</strong> مصور مشترك</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}