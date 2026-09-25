
import { Link ,useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
export default function ArticleDetails() {
    const location = useLocation();
  const article = location.state?.article;
  return (
    <main class="flex-grow-1 pt-5">
     <article className="bg-dark text-white min-vh-100" style={{ backgroundColor: '#0a0a0a' }}>
        
        {/* Header / Hero Section */}
        <div className="position-relative overflow-hidden" style={{ height: '60vh', minHeight: '500px' }}>
          <img 
            src={article.image} 
            alt={article.title} 
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" 
          />
          
          {/* Gradients */}
          <div className="position-absolute inset-0 w-100 h-100" style={{ background: 'linear-gradient(to top, #0a0a0a, rgba(10,10,10,0.5), transparent)' }}></div>
          <div className="position-absolute inset-0 w-100 h-100" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.3), transparent)' }}></div>

          {/* Breadcrumb */}
          <div className="position-absolute top-0 start-0 end-0 p-4">
            <nav className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-dark bg-opacity-50 border border-white border-opacity-10 rounded-pill text-sm backdrop-blur">
              <HashLink className="text-white-50 text-decoration-none" to="/articledetails#why-golden-hour"><i className="fa-solid fa-home"></i></HashLink>
              <i className="fa-solid fa-chevron-left text-white-50 opacity-50" style={{ fontSize: '0.75rem' }}></i>
              <a className="text-white-50 text-decoration-none" to="/blog">المدونة</a>
              <i className="fa-solid fa-chevron-left text-white-50 opacity-50" style={{ fontSize: '0.75rem' }}></i>
              <span className="text-warning fw-medium text-truncate" style={{ maxWidth: '200px' }}>{article.category}</span>
            </nav>
          </div>

          {/* Hero Content */}
          <div className="position-absolute bottom-0 start-0 end-0 p-4 p-md-5">
            <div className="container" style={{ maxWidth: '1000px' }}>
              <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                <Link className="btn btn-warning text-dark fw-bold rounded-pill px-3 py-1 btn-sm" to={`/blog?category=${article.category}`}>
                  {article.category}
                </Link>
                <div className="d-flex align-items-center gap-3 text-white-50 small">
                  <span className="d-flex align-items-center gap-2"><i className="fa-regular fa-calendar"></i>{article.date}</span>
                  <span className="d-flex align-items-center gap-2"><i className="fa-regular fa-clock"></i>{article.readTime}</span>
                </div>
              </div>

              <h1 className="display-5 fw-bold text-white mb-4 lh-base" style={{ maxWidth: '800px' }}>
                {article.title}
              </h1>

              <div className="d-inline-flex align-items-center gap-3 p-3 bg-white bg-opacity-10 rounded-4 border border-white border-opacity-10">
                <img 
                  src={article.image} 
                  alt={article.name} 
                  className="rounded-circle object-fit-cover border border-warning border-2" 
                  style={{ width: '56px', height: '56px' }} 
                />
                <div>
                  <p className="fw-bold text-white mb-0">{article.name}</p>
                  <p className="small text-white-50 mb-0">مصور محترف</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="container py-5" style={{ maxWidth: '1200px' }}>
          <div className="row g-4">
            
            {/* Left Content Column */}
            <div className="col-lg-8 order-2 order-lg-1">
              
              {/* Highlight Quote Box */}
              <div className="p-4 rounded-4 border border-warning border-opacity-25 mb-4" style={{ background: 'linear-gradient(to right, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.02))' }}>
                <p className="fs-5 text-light fst-italic mb-0" style={{ lineHeight: '1.8' }}>
                  "{article.description}"
                </p>
              </div>

              {/* Text Paragraphs & Sections */}
              <div className="text-secondary lh-lg fs-5">
                <p className="text-light mb-4">{article.description}</p>

                <h2 id="why-golden-hour" className="h3 fw-bold text-white mt-5 mb-4 d-flex align-items-center gap-3">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-3 bg-warning bg-opacity-10 border border-warning border-opacity-25 p-2" style={{ width: '40px', height: '40px' }}>
                    <i className="fa-solid fa-camera text-warning"></i>
                  </span>
                  لماذا الساعة الذهبية؟
                </h2>
                <p className="text-light mb-4">الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.</p>

                <h2 id="section-1" className="h3 fw-bold text-white mt-5 mb-4 d-flex align-items-center gap-3">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-3 bg-warning bg-opacity-10 border border-warning border-opacity-25 p-2" style={{ width: '40px', height: '40px' }}>
                    <i className="fa-solid fa-camera text-warning"></i>
                  </span>
                  التحضير المسبق
                </h2>
                <p className="text-light mb-4">خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.</p>

                <h2 id="section-2" className="h3 fw-bold text-white mt-5 mb-4 d-flex align-items-center gap-3">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-3 bg-warning bg-opacity-10 border border-warning border-opacity-25 p-2" style={{ width: '40px', height: '40px' }}>
                    <i className="fa-solid fa-camera text-warning"></i>
                  </span>
                  إعدادات الكاميرا
                </h2>
                <p className="text-light mb-4">استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.</p>

                <h2 id="section-3" className="h3 fw-bold text-white mt-5 mb-4 d-flex align-items-center gap-3">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-3 bg-warning bg-opacity-10 border border-warning border-opacity-25 p-2" style={{ width: '40px', height: '40px' }}>
                    <i className="fa-solid fa-camera text-warning"></i>
                  </span>
                  التكوين الفني
                </h2>
                <p className="text-light mb-4">ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.</p>

                <h2 id="section-4" className="h3 fw-bold text-white mt-5 mb-4 d-flex align-items-center gap-3">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-3 bg-warning bg-opacity-10 border border-warning border-opacity-25 p-2" style={{ width: '40px', height: '40px' }}>
                    <i className="fa-solid fa-camera text-warning"></i>
                  </span>
                  الخلاصة
                </h2>
                <p className="text-light mb-4">الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.</p>
              </div>

              {/* Tags Section */}
              <div className="mt-5 p-4 rounded-4 border border-secondary border-opacity-25" style={{ backgroundColor: '#111111' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-3 bg-warning bg-opacity-10 border border-warning border-opacity-25 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <i className="fa-solid fa-tags text-warning"></i>
                  </div>
                  <h3 className="h5 fw-bold text-white mb-0">الوسوم</h3>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary p-2 rounded-pill fw-normal cursor-pointer">#{article.category}</span>
                  <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary p-2 rounded-pill fw-normal cursor-pointer">#الساعة الذهبية</span>
                  <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary p-2 rounded-pill fw-normal cursor-pointer">#تصوير خارجي</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-3 p-4 rounded-4 border border-secondary border-opacity-25" style={{ backgroundColor: '#111111' }}>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 bg-warning bg-opacity-10 border border-warning border-opacity-25 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fa-solid fa-share-nodes text-warning"></i>
                    </div>
                    <h3 className="h5 fw-bold text-white mb-0">شارك المقال</h3>
                  </div>
                  <div className="d-flex gap-2">
                    <button type="button" className="btn btn-dark border border-secondary border-opacity-25 rounded-3 d-flex align-items-center justify-content-center text-secondary" style={{ width: '44px', height: '44px' }}><i className="fa-brands fa-x-twitter"></i></button>
                    <button type="button" className="btn btn-dark border border-secondary border-opacity-25 rounded-3 d-flex align-items-center justify-content-center text-secondary" style={{ width: '44px', height: '44px' }}><i className="fa-brands fa-linkedin-in"></i></button>
                    <button type="button" className="btn btn-dark border border-secondary border-opacity-25 rounded-3 d-flex align-items-center justify-content-center text-secondary" style={{ width: '44px', height: '44px' }}><i className="fa-brands fa-whatsapp"></i></button>
                    <button type="button" className="btn btn-dark border border-secondary border-opacity-25 rounded-3 d-flex align-items-center justify-content-center text-secondary" style={{ width: '44px', height: '44px' }}><i className="fa-solid fa-link"></i></button>
                  </div>
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-3 p-4 rounded-4 border border-secondary border-opacity-25" style={{ backgroundColor: '#111111' }}>
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4">
                  <img src={article.image} alt={article.name} className="rounded-4 object-fit-cover border border-warning border-opacity-25" style={{ width: '96px', height: '96px' }} />
                  <div className="text-center text-sm-start flex-grow-1">
                    <span className="badge bg-warning bg-opacity-10 text-warning text-uppercase small fw-bold mb-1">كاتب المقال</span>
                    <h3 className="h5 fw-bold text-white mb-1">{article.name}</h3>
                    <p className="text-secondary small mb-2">مصور محترف</p>
                    <p className="text-light small mb-0">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <aside className="col-lg-4 order-1 order-lg-2">
              <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
                
                {/* Table of Contents */}
                <div className="p-4 rounded-4 border border-secondary border-opacity-25 mb-4" style={{ backgroundColor: '#111111' }}>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="rounded-3 bg-warning bg-opacity-10 border border-warning border-opacity-25 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fa-solid fa-list text-warning"></i>
                    </div>
                    <h3 className="h5 fw-bold text-white mb-0">محتويات المقال</h3>
                  </div>
                  <nav className="nav flex-column gap-2">
                    <HashLink to="#why-golden-hour" className="nav-link text-secondary d-flex align-items-center gap-3 p-2 rounded-3 hover-warning">
                      <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary p-2">1</span>
                      <span className="small">لماذا الساعة الذهبية؟</span>
                    </HashLink>
                    <a href="#section-1" className="nav-link text-secondary d-flex align-items-center gap-3 p-2 rounded-3 hover-warning">
                      <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary p-2">2</span>
                      <span className="small">التحضير المسبق</span>
                    </a>
                    <a href="#section-2" className="nav-link text-secondary d-flex align-items-center gap-3 p-2 rounded-3 hover-warning">
                      <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary p-2">3</span>
                      <span className="small">إعدادات الكاميرا</span>
                    </a>
                    <a href="#section-3" className="nav-link text-secondary d-flex align-items-center gap-3 p-2 rounded-3 hover-warning">
                      <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary p-2">4</span>
                      <span className="small">التكوين الفني</span>
                    </a>
                    <a href="#section-4" className="nav-link text-secondary d-flex align-items-center gap-3 p-2 rounded-3 hover-warning">
                      <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary p-2">5</span>
                      <span className="small">الخلاصة</span>
                    </a>
                  </nav>
                </div>

                {/* Stats Widget */}
                <div className="p-4 rounded-4 border border-secondary border-opacity-25 mb-4" style={{ backgroundColor: '#111111' }}>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="text-center p-3 rounded-3" style={{ backgroundColor: '#0a0a0a' }}>
                        <i className="fa-regular fa-clock text-warning fs-5 mb-2 d-block"></i>
                        <p className="text-white fw-bold mb-0 small">{article.readTime}</p>
                        <p className="text-secondary small mb-0" style={{ fontSize: '0.75rem' }}>وقت القراءة</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center p-3 rounded-3" style={{ backgroundColor: '#0a0a0a' }}>
                        <i className="fa-regular fa-calendar text-warning fs-5 mb-2 d-block"></i>
                        <p className="text-white fw-bold mb-0 small">{article.date}</p>
                        <p className="text-secondary small mb-0" style={{ fontSize: '0.75rem' }}>تاريخ النشر</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Newsletter Box */}
                <div className="p-4 rounded-4 border border-warning border-opacity-25 text-center" style={{ background: 'linear-gradient(135deg, rgba(255,193,7,0.1), rgba(255,193,7,0.02))' }}>
                  <div className="rounded-4 bg-warning bg-opacity-20 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '56px', height: '56px' }}>
                    <i className="fa-solid fa-envelope text-warning fs-4"></i>
                  </div>
                  <h3 className="h5 fw-bold text-white mb-2">لا تفوّت جديدنا</h3>
                  <p className="text-secondary small mb-3">اشترك للحصول على أحدث المقالات</p>
                  <Link className="btn btn-warning w-100 fw-bold rounded-3 py-2 text-dark" to="/blog">تصفح المزيد</Link>
                </div>

              </div>
            </aside>

          </div>

          {/* Related Articles Section */}
          <div className="mt-5 pt-5 border-top border-secondary border-opacity-25">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center gap-3">
                <span className="rounded-4 bg-warning bg-opacity-10 border border-warning border-opacity-25 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <i className="fa-solid fa-images text-warning fs-5"></i>
                </span>
                <div>
                  <h2 className="h4 fw-bold text-white mb-0">مقالات قد تعجبك</h2>
                  <p className="text-secondary small mb-0">استكشف المزيد من المحتوى المميز</p>
                </div>
              </div>
              <Link className="btn btn-link text-warning text-decoration-none d-none d-sm-flex align-items-center gap-2 p-0" to="/blog">
                عرض الكل <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </div>

            <div className="row g-4">
              
              {/* Card Dynamic Example using article data */}
              <div className="col-sm-6 col-lg-4">
                <Link to={`/blog/${article.slug}`} className="card bg-dark text-decoration-none h-100 rounded-4 overflow-hidden border border-secondary border-opacity-25" style={{ backgroundColor: '#111111' }}>
                  <div className="position-relative" style={{ height: '200px' }}>
                    <img src={article.image} className="w-100 h-100 object-fit-cover" alt={article.title} />
                    <span className="position-absolute top-0 end-0 m-3 badge bg-warning text-dark fw-bold rounded-pill">{article.category}</span>
                  </div>
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold text-white mb-3">{article.title}</h3>
                    <div className="d-flex align-items-center justify-content-between small text-secondary">
                      <span className="d-flex align-items-center gap-2">
                        <img src={article.image} className="rounded-circle" style={{ width: '24px', height: '24px' }} alt={article.name} />
                        {article.name}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </article>
    </main>
  );
}

