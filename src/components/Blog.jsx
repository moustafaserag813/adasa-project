
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { articles } from "./articls";

export default function Blog() {
  const categories = ['الكل', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'];
  const handleCategoryChange = (category) => {
  setSelectedCategory(category);
  setCurrentPage(1);
};
  const [searchItem, setSearchItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchItem.toLowerCase());

    const matchesCategory =
      selectedCategory === "الكل" ||
      article.category.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return (
    <div className="min-vh-100 bg-black text-white mt-5">
      {/* Hero Section */}
      <div className="position-relative py-5 overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black"></div>
        {/* Background Grid Pattern */}
        <div
          className="position-absolute top-0 end-0 w-100 h-100 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(131, 127, 127, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 139, 139, 0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="position-relative container text-center py-4">
          <span className="section-label d-inline-flex align-items-center gap-2 mb-3 text-warning">
            <svg
              className="bi"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              ></path>
            </svg>
            مدونتنا
          </span>
          <h1 className="display-4 fw-bold text-white mb-3">
            استكشف <span className="text-warning">مقالاتنا</span>
          </h1>
          <p
            className="fs-5 text-secondary mx-auto"
            style={{ maxWidth: "650px" }}
          >
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div
        className="sticky-top z-3 bg-black bg-opacity-75 border-bottom border-secondary border-opacity-25"
        style={{ top: 0, backdropFilter: "blur(16px)" }}
      >
        <div className="container py-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            {/* Search Input */}
            <div
              className="position-relative w-100"
              style={{ maxWidth: "320px" }}
            >
              <input
                placeholder="ابحث في المقالات..."
                className="form-control bg-dark text-white border-secondary border-opacity-25 pe-5 py-2 rounded-3"
                type="text"
                defaultValue=""
                onChange={(e) => setSearchItem(e.target.value)}
              />
              <svg
                className="position-absolute start-0 top-50 translate-middle-y ms-3 text-secondary"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            {/* Filter Categories */}
           <div className="d-flex flex-wrap justify-content-center gap-2">
    {categories.map((cat) => (
      <button
        key={cat}
        className={`btn rounded-3 px-3 py-2 ${
          selectedCategory === cat
            ? 'active'
            : 'btn-dark text-secondary border border-secondary border-opacity-25'
        }`}
        onClick={() => handleCategoryChange(cat)}
      >
        {cat === 'الكل' ? 'جميع المقالات' : cat}
      </button>
    ))}
  </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container py-5">
        {/* Header info & view toggle */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <p className="text-secondary m-0">
            عرض <span className="fw-bold text-white">28</span> مقالات
          </p>
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center bg-dark border border-secondary border-opacity-25 rounded-3 p-1">
              <button
                className="btn btn-warning btn-sm p-2 rounded-2"
                title="عرض شبكي"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
              </button>
              <button
                className="btn btn-link text-secondary btn-sm p-2 rounded-2"
                title="عرض قائمة"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="row g-4">
          {filteredArticles.length > 0 ? (
            filteredArticles
              .slice(indexOfFirstItem, indexOfLastItem)
              .map((article) => (
                <div key={article.id} className="col-12 col-md-6 col-lg-4">
                  <article className="card h-100 bg-black text-white border-secondary overflow-hidden blog-card">
                    <Link
                      to={`/articledetails`}
                      className="text-decoration-none text-reset"
                      state={{ article: article }}
                    >
                      {/* Image & Badge */}
                      <div
                        className="position-relative overflow-hidden"
                        style={{ height: "220px" }}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-100 h-100 object-fit-cover card-img-top blog-card-img"
                        />
                        <span className="position-absolute top-0 end-0 m-3 px-3 py-1 bg-black bg-opacity-75 text-white fs-7 rounded-pill border border-secondary">
                          {article.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="card-body p-4 d-flex flex-column justify-content-between">
                        <div>
                          <div className="d-flex align-items-center gap-2 text-secondary fs-7 mb-3">
                            <span>{article.readTime}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                          </div>

                          <h3 className="card-title h5 text-white fw-bold mb-3 lh-base blog-card-title">
                            {article.title}
                          </h3>

                          <p className="card-text text-secondary fs-7 lh-base mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                        </div>

                        {/* Author Footer */}
                        <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-25">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={article.author.avatar}
                              alt={article.author.name}
                              className="rounded-circle object-fit-cover border border-secondary"
                              width="36"
                              height="36"
                            />
                            <div>
                              <p className="mb-0 fs-7 fw-semibold text-white">
                                {article.author.name}
                              </p>
                              <p
                                className="mb-0 text-secondary"
                                style={{ fontSize: "0.75rem" }}
                              >
                                {article.author.role}
                              </p>
                            </div>
                          </div>

                          <div className="arrow-btn rounded-circle d-flex align-items-center justify-content-center">
                            <svg
                              width="16"
                              height="16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                </div>
              ))
          ) : (
            <div className="text-center py-5">
              {/* الدائرة الحاضنة للأيقونة */}
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style={{
                  width: "96px",
                  height: "96px",
                  backgroundColor: "#161616",
                  border: "1px solid #262626",
                }}
              >
                <svg
                  className="text-secondary"
                  style={{ width: "48px", height: "48px" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>

              {/* العناوين والرسالة */}
              <h3 className="fs-3 fw-bold text-white mb-3">لا توجد مقالات</h3>
              <p className="text-secondary mb-4">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>

              {/* زرار إعادة التعيين */}
              <button
                className="btn btn-warning text-white d-inline-flex align-items-center gap-2 px-4 py-2 rounded-3"
                onClick={() => setSearchItem("")}
              >
                <svg
                  style={{ width: "20px", height: "20px" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                إعادة تعيين الفلاتر
              </button>
            </div>
          )}
        </div>
        {/* Pagination */}
        {selectedCategory === "الكل" && filteredArticles.length > 0 && (
            <>
        <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
          <button
            disabled={currentPage === 1}
            className={`btn border border-secondary border-opacity-25 text-secondary px-3 py-2 rounded-3 ${currentPage===1 ? `btn-black`: `btn-dark`}`}
            style={{ cursor: "not-allowed" }}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          
              <div className="d-flex align-items-center gap-1">
                {[1, 2, 3, 4, 5].map((itemNum) => (
                  <button
                    key={itemNum}
                    className={`btn rounded-3 px-3 py-2 ${
                      currentPage === itemNum
                        ? "active"
                        : "btn-dark text-secondary border border-secondary border-opacity-25"
                    }`}
                    onClick={() => setCurrentPage(itemNum)}
                  >
                    {itemNum}
                  </button>
                ))}
              </div>

              <button className={`btn border border-secondary border-opacity-25 text-secondary px-3 py-2 rounded-3 ${currentPage===5 ? `btn-black`: `btn-dark`}`} onClick={() => setCurrentPage((next) => next + 1)}
                 disabled={currentPage === 5}>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ transform: "rotate(180deg)" }}
                 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
          
       
       
         
      </div>
       <p className="text-center text-secondary mt-3 small">
          صفحة {currentPage} من 5
        </p>
       </>
          )}
      </div>
    </div>
  );
}
