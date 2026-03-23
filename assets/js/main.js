document.addEventListener("DOMContentLoaded", function() {
  // 聊天窗口切换逻辑
  const chatBtn = document.getElementById('chatBtn');
  const chatWindow = document.getElementById('chatWindow');
  const closeChat = document.getElementById('closeChat');

  if(chatBtn && chatWindow && closeChat) {
    chatBtn.addEventListener('click', () => chatWindow.style.display = 'block');
    closeChat.addEventListener('click', () => chatWindow.style.display = 'none');
  }

  // 模拟搜索逻辑
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('search-results');
  const mockData = [
    { title: 'Water Treatment Resins', url: 'solutions-water.html' },
    { title: 'Cation Exchange Resin 001x7', url: 'product-detail.html' },
    { title: 'Pharmaceutical Extraction', url: 'products.html' }
  ];

  if(searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const val = this.value.toLowerCase();
      searchResults.innerHTML = '';
      if(val) {
        const filtered = mockData.filter(item => item.title.toLowerCase().includes(val));
        if(filtered.length > 0) {
          filtered.forEach(item => {
            const a = document.createElement('a');
            a.href = item.url;
            a.className = 'search-item';
            a.textContent = item.title;
            searchResults.appendChild(a);
          });
          searchResults.style.display = 'block';
        } else {
          searchResults.style.display = 'none';
        }
      } else {
        searchResults.style.display = 'none';
      }
    });

    document.addEventListener('click', function(e) {
      if(!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  }

  // 表单模拟提交
  const contactForm = document.getElementById('contactForm');
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Message sent successfully! We will contact you soon.');
      this.reset();
    });
  }
});
