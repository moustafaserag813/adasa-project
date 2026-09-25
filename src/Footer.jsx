

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer 
      className="position-relative text-secondary overflow-hidden border-top border-secondary-subtle"
      style={{ backgroundColor: '#0a0a0a' }}
    >
    

      <div className="position-relative container py-5">
        <div className="row g-4 lg:g-5 py-4">
          
          {/* العمود الأول: معلومات الموقع والتواصل */}
          <div className="col-12 col-md-6 col-lg-3">
            <Link to="/" className="d-flex align-items-center gap-3 mb-4 text-decoration-none group">
              <div 
                className="d-flex align-items-center justify-content-center rounded-3 text-white fw-bold fs-4 transition"
                style={{ 
                  width: '44px', 
                  height: '44px', 
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  boxShadow: 'rgba(249, 115, 22, 0.3) 0px 4px 20px'
                }}
              >
                ع
              </div>
              <span className="fs-4 fw-bold text-white">عدسة</span>
            </Link>

            <p className="small text-secondary mb-4 lh-lg" style={{ fontSize: '0.875rem' }}>
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            {/* أزرار التواصل الاجتماعي */}
            <div className="d-flex gap-2">
              <a 
                href="https://twitter.com/adasah" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="twitter"
                className="btn btn-outline-secondary d-flex align-items-center justify-content-center border-0 rounded-3 text-secondary p-0 transition-all hover-orange"
                style={{ width: '40px', height: '40px', backgroundColor: '#161616', border: '1px solid #262626' }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>

              <a 
                href="https://github.com/adasah" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="github"
                className="btn btn-outline-secondary d-flex align-items-center justify-content-center border-0 rounded-3 text-secondary p-0 transition-all hover-orange"
                style={{ width: '40px', height: '40px', backgroundColor: '#161616', border: '1px solid #262626' }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>

              <a 
                href="https://linkedin.com/company/adasah" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="linkedin"
                className="btn btn-outline-secondary d-flex align-items-center justify-content-center border-0 rounded-3 text-secondary p-0 transition-all hover-orange"
                style={{ width: '40px', height: '40px', backgroundColor: '#161616', border: '1px solid #262626' }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>

              <a 
                href="https://youtube.com/@adasah" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="youtube"
                className="btn btn-outline-secondary d-flex align-items-center justify-content-center border-0 rounded-3 text-secondary p-0 transition-all hover-orange"
                style={{ width: '40px', height: '40px', backgroundColor: '#161616', border: '1px solid #262626' }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط استكشف */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="h6 text-white fw-bold mb-4 d-flex align-items-center gap-2">
              <span className="rounded-pill" style={{ width: '32px', height: '2px', background: 'linear-gradient(to right, #f97316, #eab308)' }}></span>
              استكشف
            </h3>
            <ul className="list-unstyled d-flex flex-column gap-3 p-0">
              <li>
                <Link to="/" className="text-secondary text-decoration-none small transition hover-text-warning d-flex align-items-center gap-2">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary text-decoration-none small transition hover-text-warning d-flex align-items-center gap-2">
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary text-decoration-none small transition hover-text-warning d-flex align-items-center gap-2">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: التصنيفات */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="h6 text-white fw-bold mb-4 d-flex align-items-center gap-2">
              <span className="rounded-pill" style={{ width: '32px', height: '2px', background: 'linear-gradient(to right, #f97316, #eab308)' }}></span>
              التصنيفات
            </h3>
            <ul className="list-unstyled d-flex flex-column gap-3 p-0">
              <li>
                <Link to="/blog?category=إضاءة" className="text-secondary text-decoration-none small transition hover-text-warning d-flex align-items-center gap-2">
                  إضاءة
                </Link>
              </li>
              <li>
                <Link to="/blog?category=بورتريه" className="text-secondary text-decoration-none small transition hover-text-warning d-flex align-items-center gap-2">
                  بورتريه
                </Link>
              </li>
              <li>
                <Link to="/blog?category=مناظر طبيعية" className="text-secondary text-decoration-none small transition hover-text-warning d-flex align-items-center gap-2">
                  مناظر طبيعية
                </Link>
              </li>
              <li>
                <Link to="/blog?category=تقنيات" className="text-secondary text-decoration-none small transition hover-text-warning d-flex align-items-center gap-2">
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: الاشتراك في القائمة البريدية */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="h6 text-white fw-bold mb-4 d-flex align-items-center gap-2">
              <span className="rounded-pill" style={{ width: '32px', height: '2px', background: 'linear-gradient(to right, #f97316, #eab308)' }}></span>
              ابقى على اطلاع
            </h3>
            <p className="small text-secondary mb-3">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="d-flex flex-column gap-3">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="form-control text-white border-0 py-2 px-3 small"
                style={{ backgroundColor: '#161616', border: '1px solid #262626' }}
              />
              <button 
                type="submit" 
                className="btn text-white w-100 fw-medium transition"
                style={{ backgroundColor: '#f97316', borderColor: '#f97316' }}
              >
                اشترك
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* الشريط السفلي للحقوق والسياسات */}
      <div className="position-relative border-top border-secondary-subtle py-4">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="small text-secondary mb-0">
              © 2026 عدسة. صنع بكل <i className="fa-solid fa-heart text-warning mx-1"></i> جميع الحقوق محفوظة.
            </p>
            <div className="d-flex gap-4">
              <Link to="/privacy" className="text-secondary text-decoration-none small transition hover-text-warning">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="text-secondary text-decoration-none small transition hover-text-warning">
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}