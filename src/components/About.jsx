

export default function About() {
  const teamMembers = [
  { name: 'سالم أحمد', role: 'مصور محترف', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { name: 'محمد علي', role: 'مصور بورتريه', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
  { name: 'إبراهيم حسن', role: 'مصور طبيعة', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { name: 'داود خالد', role: 'مدرب تصوير', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face' },
  { name: 'ليث محمود', role: 'فنان بصري', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face' },
  { name: 'جمال عبدالله', role: 'مصور ومراجع تقني', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face' },
  { name: 'خالد الفيصل', role: 'مصور فلكي', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face' },
  { name: 'نادر سعيد', role: 'مصور شوارع', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face' },
  { name: 'هاني الشمري', role: 'مصور طعام', img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face' },
];
  return (
  <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }} dir="rtl">
      
      {/* Section 1: Hero Section */}
      <section style={{ position: 'relative', paddingTop: '3rem', paddingBottom: '3rem', overflow: 'hidden' }}>
        
        {/* Grid Pattern Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(38, 38, 38, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(38, 38, 38, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            zIndex: 1,
          }}
        ></div>

        {/* Ambient Glows */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.25, pointerEvents: 'none', zIndex: 1 }}>
          <div
            style={{
              position: 'absolute',
              top: '5rem',
              left: '5rem',
              width: '288px',
              height: '288px',
              backgroundColor: 'rgba(249, 115, 22, 0.2)',
              borderRadius: '50%',
              filter: 'blur(100px)',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: '5rem',
              right: '5rem',
              width: '384px',
              height: '384px',
              backgroundColor: 'rgba(234, 179, 8, 0.1)',
              borderRadius: '50%',
              filter: 'blur(120px)',
            }}
          ></div>
        </div>

        <div className="container text-center py-5" style={{ position: 'relative', zIndex: 2 }}>
          {/* Badge */}
          <span
            style={{
              backgroundColor: '#161616',
              border: '1px solid #262626',
              borderRadius: '50rem',
              padding: '0.5rem 1rem',
              color: '#ffffff',
              marginBottom: '1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
            }}
          >
            <span style={{ width: '8px', height: '8px', backgroundColor: '#f97316', borderRadius: '50%' }}></span>
            من نحن
          </span>

          {/* Heading */}
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1.5rem' }}>
            مهمتنا هي{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f97316, #eab308)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              الإعلام والإلهام
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: '#a3a3a3',
              fontSize: '1.25rem',
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto 3rem auto',
            }}
          >
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          {/* Stats Grid */}
          <div className="row g-3 justify-content-center mx-auto" style={{ maxWidth: '900px' }}>
            {[
              { icon: 'fa-users', num: '+2مليون', label: 'قارئ شهرياً' },
              { icon: 'fa-newspaper', num: '+500', label: 'مقالة منشورة' },
              { icon: 'fa-pen-nib', num: '+50', label: 'كاتب خبير' },
              { icon: 'fa-book-open', num: '+15', label: 'تصنيف' },
            ].map((stat, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <div
                  style={{
                    background: 'rgba(22, 22, 22, 0.7)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid #262626',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <i className={`fa-solid ${stat.icon}`} style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '0.5rem', display: 'block' }}></i>
                  <div
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #f97316, #eab308)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {stat.num}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#737373' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Values Section */}
      <section
        style={{
          backgroundColor: '#111111',
          borderTop: '1px solid #262626',
          borderBottom: '1px solid #262626',
          paddingTop: '3rem',
          paddingBottom: '3rem',
        }}
      >
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
              }}
            >
              <span style={{ width: '6px', height: '32px', background: 'linear-gradient(to bottom, #f97316, #eab308)', borderRadius: '50px' }}></span>
              قيمنا
              <span style={{ width: '6px', height: '32px', background: 'linear-gradient(to bottom, #eab308, #f97316)', borderRadius: '50px' }}></span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#a3a3a3' }}>المبادئ التي توجه كل ما نقوم بإنشائه</p>
          </div>

          <div className="row g-4">
            {[
              { icon: 'fa-bullseye', title: 'الجودة أولاً', desc: 'محتوى مدروس ومكتب بخبرة' },
              { icon: 'fa-bolt', title: 'تركيز عملي', desc: 'أمثلة واقعية يمكنك تطبيقها اليوم' },
              { icon: 'fa-handshake', title: 'المجتمع', desc: 'تعلم مع آلاف المصورين' },
              { icon: 'fa-arrows-rotate', title: 'دائماً محدث', desc: 'أحدث الاتجاهات وأفضل الممارسات' },
            ].map((val, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div
                  style={{
                    backgroundColor: '#161616',
                    border: '1px solid #262626',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    textAlign: 'center',
                    height: '100%',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#262626')}
                >
                  <i className={`fa-solid ${val.icon}`} style={{ fontSize: '2.5rem', color: '#f97316', marginBottom: '1rem', display: 'block' }}></i>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.5rem' }}>{val.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#a3a3a3', margin: 0 }}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Team Section */}
      <section style={{ backgroundColor: '#0a0a0a', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span
              style={{
                backgroundColor: '#161616',
                border: '1px solid #262626',
                borderRadius: '50rem',
                padding: '0.5rem 1rem',
                color: '#ffffff',
                marginBottom: '0.75rem',
                display: 'inline-block',
                fontSize: '0.875rem',
              }}
            >
              فريقنا
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.75rem' }}>تعرف على كتابنا</h2>
            <p style={{ fontSize: '1.25rem', color: '#a3a3a3', maxWidth: '600px', margin: '0 auto' }}>
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
            </p>
          </div>

          <div className="row g-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-4">
                <div
                  style={{
                    backgroundColor: '#161616',
                    border: '1px solid #262626',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    textAlign: 'center',
                    height: '100%',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#262626')}
                >
                  {/* Image Profile Container */}
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
                    <img
                      src={member.img}
                      alt={member.name}
                      style={{
                        width: '96px',
                        height: '96px',
                        borderRadius: '50%',
                        border: '4px solid #262626',
                        objectFit: 'cover',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#f97316',
                        border: '2px solid #161616',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg style={{ width: '100%', height: '100%', padding: '2px', color: '#ffffff' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>

                  <h3 style={{ fontWeight: 'bold', color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                  <p style={{ color: '#f97316', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1.5rem' }}>{member.role}</p>

                  {/* Social Buttons with Inline Hover Handlers */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                    {/* Twitter Button */}
                    <a
                      href="#"
                      style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: '#262626',
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#737373',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f97316'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#262626'; e.currentTarget.style.color = '#737373'; }}
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* GitHub Button */}
                    <a
                      href="#"
                      style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: '#262626',
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#737373',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#404040'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#262626'; e.currentTarget.style.color = '#737373'; }}
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>

                    {/* LinkedIn Button */}
                    <a
                      href="#"
                      style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: '#262626',
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#737373',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0284c7'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#262626'; e.currentTarget.style.color = '#737373'; }}
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  
}
