// Mock Data for Fake Delivery App
const CATEGORIES = [
  { id: 'all', name: '전체', emoji: '🍽️' },
  { id: 'korean', name: '한식/분식', emoji: '🍲' },
  { id: 'western', name: '양식/피자', emoji: '🍕' },
  { id: 'chicken', name: '치킨', emoji: '🍗' },
  { id: 'japanese', name: '일식/돈까스', emoji: '🍣' },
  { id: 'dessert', name: '디저트', emoji: '☕' }
];

const RESTAURANTS = [
  {
    id: 1,
    name: '도토리 분식당',
    category: 'korean',
    rating: 4.8,
    deliveryFee: 3000,
    deliveryTime: '25~35분',
    emoji: '🍲',
    description: '엄마 손맛 그대로, 정성을 담은 든든한 한 끼 분식',
    menus: [
      { id: 'm101', name: '매콤 달콤 떡볶이', price: 6500, calories: 750, emoji: '🍢', description: '쫄깃한 밀떡과 특별 비법 소스의 조화' },
      { id: 'm102', name: '바삭바삭 모듬튀김', price: 5000, calories: 480, emoji: '🍤', description: '김말이, 만두, 오징어, 고구마 튀김 세트' },
      { id: 'm103', name: '참치 꽉꽉 김밥', price: 4500, calories: 420, emoji: '🍙', description: '고소한 참치마요가 듬뿍 들어간 한 줄 김밥' }
    ]
  },
  {
    id: 2,
    name: '피자하우스 풀잎점',
    category: 'western',
    rating: 4.9,
    deliveryFee: 3500,
    deliveryTime: '30~45분',
    emoji: '🍕',
    description: '자연산 치즈와 신선한 채소로 갓 구워낸 프리미엄 피자',
    menus: [
      { id: 'm201', name: '치즈 포테이토 피자 (M)', price: 22900, calories: 1800, emoji: '🍕', description: '담백한 감자와 베이컨, 풍성한 치즈의 만남' },
      { id: 'm202', name: '토마토 오븐 파스타', price: 8500, calories: 650, emoji: '🍝', description: '오븐에서 치즈를 가득 얹어 구워낸 토마토 파스타' }
    ]
  },
  {
    id: 3,
    name: '숲속 치킨 둥지',
    category: 'chicken',
    rating: 4.7,
    deliveryFee: 3000,
    deliveryTime: '35~50분',
    emoji: '🍗',
    description: '겉은 바삭하고 속은 촉촉한 웰빙 치킨',
    menus: [
      { id: 'm301', name: '바삭 꿀간장 치킨', price: 19000, calories: 1750, emoji: '🍗', description: '달콤한 꿀과 간장의 환상적인 조화' },
      { id: 'm302', name: '매콤 양념 치킨', price: 20000, calories: 1900, emoji: '🍗', description: '중독성 있는 매운맛의 오리지널 양념 치킨' }
    ]
  },
  {
    id: 4,
    name: '파도스시',
    category: 'japanese',
    rating: 4.9,
    deliveryFee: 4000,
    deliveryTime: '20~35분',
    emoji: '🍣',
    description: '매일 아침 엄선된 활어로 만드는 정갈한 초밥',
    menus: [
      { id: 'm401', name: '모듬 초밥 (12pc)', price: 18000, calories: 620, emoji: '🍣', description: '연어, 광어, 참치 등 인기 초밥 모듬' },
      { id: 'm402', name: '바삭 안심 돈카츠', price: 12000, calories: 850, emoji: '🥩', description: '겉바속촉 국내산 안심으로 만든 두툼한 돈카츠' }
    ]
  },
  {
    id: 5,
    name: '차이메이',
    category: 'chinese',
    rating: 4.6,
    deliveryFee: 2500,
    deliveryTime: '15~25분',
    emoji: '🍜',
    description: '정통 중화요리의 깊고 풍부한 맛',
    menus: [
      { id: 'm501', name: '불향 듬뿍 짜장면', price: 7000, calories: 780, emoji: '🍜', description: '직화로 볶아내 불향이 살아있는 짜장면' },
      { id: 'm502', name: '칼칼한 삼선짬뽕', price: 9000, calories: 680, emoji: '🍜', description: '해물이 가득 들어가 얼큰하고 시원한 짬뽕' },
      { id: 'm503', name: '바삭 탕수육 (소)', price: 16000, calories: 1100, emoji: '🍲', description: '새콤달콤한 소스와 바삭한 고기 튀김' }
    ]
  },
  {
    id: 6,
    name: '달콤 구름 베이커리',
    category: 'dessert',
    rating: 4.9,
    deliveryFee: 3000,
    deliveryTime: '20~30분',
    emoji: '☕',
    description: '매일 구운 따뜻한 빵과 유기농 커피',
    menus: [
      { id: 'm601', name: '딸기 생크림 케이크', price: 7500, calories: 450, emoji: '🍰', description: '신선한 딸기와 달콤한 생크림 시트' },
      { id: 'm602', name: '아이스 바닐라 라떼', price: 5000, calories: 220, emoji: '🥤', description: '천연 바닐라 빈이 들어간 고급 라떼' },
      { id: 'm603', name: '수제 초콜릿 쿠키', price: 3500, calories: 350, emoji: '🍪', description: '다크 초콜릿 칩이 가득 박힌 꾸덕한 쿠키' }
    ]
  }
];

// App State
let state = {
  currentView: 'home',
  activeCategory: 'all',
  selectedRestaurantId: null,
  cart: {}, // { menuId: quantity }
  activeRestaurantId: null,
  cumulativeSavings: 0,
  cumulativeSkips: 0,
  lastSavedOrder: {
    amount: 0,
    calories: 0
  }
};

// DOM Cache
const views = {
  home: document.getElementById('view-home'),
  detail: document.getElementById('view-detail'),
  cart: document.getElementById('view-cart'),
  reflection: document.getElementById('view-reflection'),
  delivery: document.getElementById('view-delivery')
};

// Helper function to format price
function formatPrice(val) {
  return val.toLocaleString() + '원';
}

// Toast notification function
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// Find menu item & its restaurant
function getMenuItemById(menuId) {
  for (const res of RESTAURANTS) {
    const menu = res.menus.find(m => m.id === menuId);
    if (menu) {
      return { menu, restaurant: res };
    }
  }
  return null;
}

// View Routing Manager
function changeView(viewName, params = {}) {
  // Hide all views
  Object.values(views).forEach(view => {
    if (view) view.classList.add('hidden');
  });

  state.currentView = viewName;
  
  if (viewName === 'home') {
    state.selectedRestaurantId = null;
    if (views.home) views.home.classList.remove('hidden');
    renderHome();
  } else if (viewName === 'detail') {
    state.selectedRestaurantId = params.restaurantId;
    if (views.detail) views.detail.classList.remove('hidden');
    renderDetail();
  } else if (viewName === 'cart') {
    if (views.cart) views.cart.classList.remove('hidden');
    renderCart();
  } else if (viewName === 'reflection') {
    if (views.reflection) views.reflection.classList.remove('hidden');
    renderReflection();
  } else if (viewName === 'delivery') {
    if (views.delivery) views.delivery.classList.remove('hidden');
    renderDeliveryProgress();
  }

  // Update floating cart visibility
  updateFloatingCart();
  // Scroll to top of app shell
  window.scrollTo(0, 0);
  const container = document.querySelector('.app-shell');
  if (container) container.scrollTop = 0;
}

// Initialize LocalStorage Data
function loadStats() {
  state.cumulativeSavings = parseInt(localStorage.getItem('mindfoody_savings')) || 0;
  state.cumulativeSkips = parseInt(localStorage.getItem('mindfoody_skips')) || 0;
  
  // Update stats banner in home
  const statCount = document.getElementById('stat-count');
  const statAmount = document.getElementById('stat-amount');
  if (statCount) statCount.innerText = state.cumulativeSkips;
  if (statAmount) statAmount.innerText = formatPrice(state.cumulativeSavings);
}

// Render Categories & Restaurant Cards
function renderHome() {
  // Update Stats at Home
  const statCount = document.getElementById('stat-count');
  const statAmount = document.getElementById('stat-amount');
  if (statCount) statCount.innerText = state.cumulativeSkips;
  if (statAmount) statAmount.innerText = formatPrice(state.cumulativeSavings);

  // Render Category Chips
  const categoryContainer = document.getElementById('category-list');
  if (categoryContainer) {
    categoryContainer.innerHTML = CATEGORIES.map(cat => {
      const isActive = state.activeCategory === cat.id ? 'active' : '';
      return `
        <button class="category-chip ${isActive}" data-id="${cat.id}">
          <span class="chip-emoji">${cat.emoji}</span>
          <span class="chip-name">${cat.name}</span>
        </button>
      `;
    }).join('');
  }

  // Render Restaurants
  const restaurantContainer = document.getElementById('restaurant-list');
  if (restaurantContainer) {
    const filtered = state.activeCategory === 'all'
      ? RESTAURANTS
      : RESTAURANTS.filter(r => r.category === state.activeCategory);

    if (filtered.length === 0) {
      restaurantContainer.innerHTML = `<p class="no-results">이 카테고리에는 등록된 음식점이 없습니다.</p>`;
    } else {
      restaurantContainer.innerHTML = filtered.map(res => {
        return `
          <div class="restaurant-card" data-id="${res.id}">
            <div class="card-logo-area">
              <span class="card-emoji">${res.emoji}</span>
            </div>
            <div class="card-info">
              <div class="card-title-row">
                <h4 class="card-name">${res.name}</h4>
                <span class="card-rating">⭐ ${res.rating}</span>
              </div>
              <p class="card-desc">${res.description}</p>
              <div class="card-meta">
                <span class="card-time">🕒 ${res.deliveryTime}</span>
                <span class="card-dot">·</span>
                <span class="card-fee">배달팁 ${formatPrice(res.deliveryFee)}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

// Render Restaurant Detail & Menus
function renderDetail() {
  const resId = parseInt(state.selectedRestaurantId);
  const restaurant = RESTAURANTS.find(r => r.id === resId);
  if (!restaurant) return;

  // Set Details Header & Info Card
  const coverEmoji = document.getElementById('detail-emoji');
  const detailName = document.getElementById('detail-name');
  const detailRating = document.getElementById('detail-rating-val');
  const detailDesc = document.getElementById('detail-desc');
  const detailFee = document.getElementById('detail-delivery-fee');
  const detailTime = document.getElementById('detail-delivery-time');

  if (coverEmoji) coverEmoji.innerText = restaurant.emoji;
  if (detailName) detailName.innerText = restaurant.name;
  if (detailRating) detailRating.innerText = restaurant.rating;
  if (detailDesc) detailDesc.innerText = restaurant.description;
  if (detailFee) detailFee.innerText = formatPrice(restaurant.deliveryFee);
  if (detailTime) detailTime.innerText = restaurant.deliveryTime;

  // Render Menus
  const menuContainer = document.getElementById('menu-list');
  if (menuContainer) {
    menuContainer.innerHTML = restaurant.menus.map(menu => {
      const cartQty = state.cart[menu.id] || 0;
      const badgeHtml = cartQty > 0 ? `<span class="menu-cart-badge">${cartQty}</span>` : '';
      return `
        <div class="menu-card">
          <div class="menu-info">
            <h4 class="menu-name">${menu.name}</h4>
            <p class="menu-description">${menu.description}</p>
            <div class="menu-meta">
              <span class="menu-price">${formatPrice(menu.price)}</span>
              <span class="menu-calories">${menu.calories} kcal</span>
            </div>
          </div>
          <div class="menu-action">
            <button class="btn-add-menu" data-menu-id="${menu.id}">
              담기 ${badgeHtml}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Add Item to Cart
function addToCart(menuId) {
  const menuInfo = getMenuItemById(menuId);
  if (!menuInfo) return;

  const { restaurant } = menuInfo;

  // Enforce single restaurant in cart
  if (state.activeRestaurantId !== null && state.activeRestaurantId !== restaurant.id) {
    const confirmClear = confirm("다른 음식점의 메뉴가 이미 장바구니에 담겨 있습니다.\n장바구니를 비우고 새로 담으시겠습니까?");
    if (!confirmClear) return;
    state.cart = {};
  }

  state.activeRestaurantId = restaurant.id;
  state.cart[menuId] = (state.cart[menuId] || 0) + 1;
  
  updateFloatingCart();
  renderDetail(); // Re-render detail menu badges
  showToast(`🛒 ${menuInfo.menu.name}을(를) 장바구니에 담았습니다.`);
}

// Update floating cart totals
function updateFloatingCart() {
  const bar = document.getElementById('floating-cart-bar');
  const badge = document.getElementById('floating-cart-badge');
  const price = document.getElementById('floating-cart-price');

  if (!bar) return;

  const itemKeys = Object.keys(state.cart);
  const totalCount = Object.values(state.cart).reduce((sum, q) => sum + q, 0);

  // Floating cart only shows in 'home' and 'detail' views when cart is not empty
  const isValidView = state.currentView === 'home' || state.currentView === 'detail';

  if (totalCount > 0 && isValidView) {
    let subtotal = 0;
    itemKeys.forEach(menuId => {
      const menuInfo = getMenuItemById(menuId);
      if (menuInfo) {
        subtotal += menuInfo.menu.price * state.cart[menuId];
      }
    });

    const res = RESTAURANTS.find(r => r.id === state.activeRestaurantId);
    const deliveryFee = res ? res.deliveryFee : 0;
    const total = subtotal + deliveryFee;

    bar.classList.remove('hidden');
    if (badge) badge.innerText = totalCount;
    if (price) price.innerText = formatPrice(total);
  } else {
    bar.classList.add('hidden');
  }
}

// Render Cart View
function renderCart() {
  const contentContainer = document.querySelector('.cart-content-container');
  const emptyContainer = document.getElementById('cart-empty-view');

  const cartKeys = Object.keys(state.cart);

  if (cartKeys.length === 0) {
    if (contentContainer) contentContainer.classList.add('hidden');
    if (emptyContainer) emptyContainer.classList.remove('hidden');
    state.activeRestaurantId = null;
    return;
  }

  if (contentContainer) contentContainer.classList.remove('hidden');
  if (emptyContainer) emptyContainer.classList.add('hidden');

  const restaurant = RESTAURANTS.find(r => r.id === state.activeRestaurantId);
  const cartResName = document.getElementById('cart-restaurant-name');
  if (cartResName && restaurant) cartResName.innerText = restaurant.name;

  const itemsContainer = document.getElementById('cart-items-list');
  if (itemsContainer) {
    itemsContainer.innerHTML = cartKeys.map(menuId => {
      const menuInfo = getMenuItemById(menuId);
      if (!menuInfo) return '';
      const { menu } = menuInfo;
      const quantity = state.cart[menuId];
      const itemTotal = menu.price * quantity;

      return `
        <div class="cart-item">
          <div class="cart-item-header">
            <span class="cart-item-emoji">${menu.emoji || '🍕'}</span>
            <div class="cart-item-info">
              <span class="cart-item-name">${menu.name}</span>
              <span class="cart-item-cal">${menu.calories * quantity} kcal</span>
            </div>
          </div>
          <div class="cart-item-controls-row">
            <span class="cart-item-price">${formatPrice(itemTotal)}</span>
            <div class="quantity-controller">
              <button class="btn-qty-minus" data-menu-id="${menu.id}">-</button>
              <span class="qty-num">${quantity}</span>
              <button class="btn-qty-plus" data-menu-id="${menu.id}">+</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Calculate billing info
  let subtotal = 0;
  cartKeys.forEach(menuId => {
    const menuInfo = getMenuItemById(menuId);
    if (menuInfo) {
      subtotal += menuInfo.menu.price * state.cart[menuId];
    }
  });

  const deliveryFee = restaurant ? restaurant.deliveryFee : 0;
  const total = subtotal + deliveryFee;

  const subtotalEl = document.getElementById('bill-subtotal');
  const feeEl = document.getElementById('bill-delivery-fee');
  const totalEl = document.getElementById('bill-total');
  const btnTotalEl = document.getElementById('btn-checkout-total');

  if (subtotalEl) subtotalEl.innerText = formatPrice(subtotal);
  if (feeEl) feeEl.innerText = formatPrice(deliveryFee);
  if (totalEl) totalEl.innerText = formatPrice(total);
  if (btnTotalEl) btnTotalEl.innerText = formatPrice(total);
}

// Update Cart Item Quantity
function updateQuantity(menuId, change) {
  state.cart[menuId] = (state.cart[menuId] || 0) + change;
  if (state.cart[menuId] <= 0) {
    delete state.cart[menuId];
  }
  
  if (Object.keys(state.cart).length === 0) {
    state.activeRestaurantId = null;
  }

  renderCart();
  updateFloatingCart();
}

// Handle checkout step
function checkout() {
  const cartKeys = Object.keys(state.cart);
  if (cartKeys.length === 0) return;

  const restaurant = RESTAURANTS.find(r => r.id === state.activeRestaurantId);
  let subtotal = 0;
  let calories = 0;

  cartKeys.forEach(menuId => {
    const menuInfo = getMenuItemById(menuId);
    if (menuInfo) {
      const qty = state.cart[menuId];
      subtotal += menuInfo.menu.price * qty;
      calories += menuInfo.menu.calories * qty;
    }
  });

  const deliveryFee = restaurant ? restaurant.deliveryFee : 0;
  const totalSaved = subtotal + deliveryFee;

  state.lastSavedOrder = {
    amount: totalSaved,
    calories: calories
  };

  changeView('reflection');
}

// Render Reflection Screen
function renderReflection() {
  const currentSavedEl = document.getElementById('reflect-current-saved');
  const currentCaloriesEl = document.getElementById('reflect-current-calories');
  const caloriesCompareEl = document.getElementById('reflect-calories-compare');
  const cumCountEl = document.getElementById('reflect-cum-count');
  const cumAmountEl = document.getElementById('reflect-cum-amount');

  if (currentSavedEl) currentSavedEl.innerText = formatPrice(state.lastSavedOrder.amount);
  if (currentCaloriesEl) currentCaloriesEl.innerText = `${state.lastSavedOrder.calories.toLocaleString()} kcal`;

  // Dynamic jog time calculation (Approx. 9 kcal per minute of standard jogging)
  const jogMinutes = Math.round(state.lastSavedOrder.calories / 9);
  if (caloriesCompareEl) {
    caloriesCompareEl.innerHTML = `🏃‍♂️ <strong>조깅 약 ${jogMinutes}분</strong> 동안 달렸을 때 소모되는 칼로리입니다!`;
  }

  // Preview projected values
  const projectedCount = state.cumulativeSkips + 1;
  const projectedAmount = state.cumulativeSavings + state.lastSavedOrder.amount;

  if (cumCountEl) cumCountEl.innerText = `${projectedCount}회`;
  if (cumAmountEl) cumAmountEl.innerText = formatPrice(projectedAmount);
}

// Save to LocalStorage & Complete Skip
function confirmResist() {
  state.cumulativeSkips += 1;
  state.cumulativeSavings += state.lastSavedOrder.amount;

  localStorage.setItem('mindfoody_savings', state.cumulativeSavings.toString());
  localStorage.setItem('mindfoody_skips', state.cumulativeSkips.toString());

  showToast("🎉 나와의 건강한 약속을 지켰습니다!");
  changeView('delivery');
}

// Cancel and Return to Cart View
function cancelResist() {
  changeView('cart');
}

// Render and animate Delivery Progress View
function renderDeliveryProgress() {
  const deliverySavedMoney = document.getElementById('delivery-saved-money');
  const deliverySavedCal = document.getElementById('delivery-saved-cal');
  const actionBox = document.getElementById('delivery-action-box');
  const rider = document.getElementById('delivery-rider');
  
  if (deliverySavedMoney) {
    deliverySavedMoney.innerText = `${formatPrice(state.lastSavedOrder.amount)} 내 통장 입금 완료!`;
  }
  if (deliverySavedCal) {
    deliverySavedCal.innerText = `${state.lastSavedOrder.calories.toLocaleString()} kcal 섭취 차단 완료!`;
  }

  // Reset steps
  const steps = [
    document.getElementById('step-1'),
    document.getElementById('step-2'),
    document.getElementById('step-3'),
    document.getElementById('step-4')
  ];

  steps.forEach(step => {
    if (step) step.classList.remove('active');
  });

  if (actionBox) actionBox.classList.add('hidden');
  if (rider) {
    rider.style.left = '0';
  }

  // Animation timeline
  // Step 1 active immediately
  setTimeout(() => {
    if (steps[0]) steps[0].classList.add('active');
  }, 100);

  // Rider starts moving
  setTimeout(() => {
    if (rider) rider.style.left = '85%';
  }, 200);

  // Step 2
  setTimeout(() => {
    if (steps[1]) steps[1].classList.add('active');
  }, 1200);

  // Step 3
  setTimeout(() => {
    if (steps[2]) steps[2].classList.add('active');
  }, 2400);

  // Step 4
  setTimeout(() => {
    if (steps[3]) steps[3].classList.add('active');
  }, 3600);

  // Show action button
  setTimeout(() => {
    if (actionBox) actionBox.classList.remove('hidden');
  }, 4000);
}

// Global Event Listeners Setup
function initEvents() {
  // Category chip clicks
  document.addEventListener('click', e => {
    const chip = e.target.closest('.category-chip');
    if (chip) {
      const catId = chip.getAttribute('data-id');
      state.activeCategory = catId;
      renderHome();
    }
  });

  // Restaurant card clicks
  document.addEventListener('click', e => {
    const card = e.target.closest('.restaurant-card');
    if (card) {
      const resId = parseInt(card.getAttribute('data-id'));
      changeView('detail', { restaurantId: resId });
    }
  });

  // Add menu button clicks
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-add-menu');
    if (btn) {
      const menuId = btn.getAttribute('data-menu-id');
      addToCart(menuId);
    }
  });

  // Quantity control buttons
  document.addEventListener('click', e => {
    const btnPlus = e.target.closest('.btn-qty-plus');
    if (btnPlus) {
      const menuId = btnPlus.getAttribute('data-menu-id');
      updateQuantity(menuId, 1);
    }

    const btnMinus = e.target.closest('.btn-qty-minus');
    if (btnMinus) {
      const menuId = btnMinus.getAttribute('data-menu-id');
      updateQuantity(menuId, -1);
    }
  });

  // Navigation clicks
  const btnDetailBack = document.getElementById('btn-detail-back');
  if (btnDetailBack) {
    btnDetailBack.addEventListener('click', () => changeView('home'));
  }

  const btnCartBack = document.getElementById('btn-cart-back');
  if (btnCartBack) {
    btnCartBack.addEventListener('click', () => {
      if (state.selectedRestaurantId) {
        changeView('detail', { restaurantId: state.selectedRestaurantId });
      } else {
        changeView('home');
      }
    });
  }

  const btnFloatingCart = document.getElementById('floating-cart-bar');
  if (btnFloatingCart) {
    btnFloatingCart.addEventListener('click', () => changeView('cart'));
  }

  const btnEmptyHome = document.getElementById('btn-empty-home');
  if (btnEmptyHome) {
    btnEmptyHome.addEventListener('click', () => changeView('home'));
  }

  const btnCheckout = document.getElementById('btn-checkout');
  if (btnCheckout) {
    btnCheckout.addEventListener('click', checkout);
  }

  const btnConfirmSave = document.getElementById('btn-confirm-save');
  if (btnConfirmSave) {
    btnConfirmSave.addEventListener('click', confirmResist);
  }

  const btnCancelSave = document.getElementById('btn-cancel-save');
  if (btnCancelSave) {
    btnCancelSave.addEventListener('click', cancelResist);
  }

  const btnDeliveryComplete = document.getElementById('btn-delivery-complete');
  if (btnDeliveryComplete) {
    btnDeliveryComplete.addEventListener('click', () => {
      // Empty cart and clear active restaurant
      state.cart = {};
      state.activeRestaurantId = null;
      changeView('home');
    });
  }
}

// App Initialization
window.addEventListener('DOMContentLoaded', () => {
  // Dynamically assign view cache now that DOM is loaded
  views.home = document.getElementById('view-home');
  views.detail = document.getElementById('view-detail');
  views.cart = document.getElementById('view-cart');
  views.reflection = document.getElementById('view-reflection');
  views.delivery = document.getElementById('view-delivery');

  loadStats();
  initEvents();
  changeView('home');
});
