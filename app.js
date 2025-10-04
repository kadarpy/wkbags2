// WK BAGS - Luxury E-commerce Application
class WKBagsApp {
    constructor() {
        this.products = [
            {
                id: 1,
                name: "Pearl Elegance Clutch",
                category: "bridal",
                price: 299,
                originalPrice: 399,
                images: ["images/redheartbag.jpg", "https://pplx-res.cloudinary.com/image/upload/v1757151194/pplx_project_search_images/4aaf4dc1d74f08f96b3c9b2df6e46014b1240001.png"],
                description: "Handcrafted pearl-beaded clutch perfect for wedding ceremonies and formal events",
                details: "Premium freshwater pearls, silk lining, gold-plated clasp",
                rating: 4.9,
                reviews: 127
            },
            {
                id: 2,
                name: "Golden Diamond Tote",
                category: "luxury",
                price: 599,
                originalPrice: 799,
                images: ["images/goldenheartbag.jpg", "https://pplx-res.cloudinary.com/image/upload/v1757151194/pplx_project_search_images/45cf56e098bc9be29940751b56007f5ff1b7b862.png"],
                description: "Luxury beaded tote with geometric diamond patterns in gold and black",
                details: "Hand-selected glass beads, leather handles, premium cotton lining",
                rating: 4.8,
                reviews: 89
            },
            {
                id: 3,
                name: "Floral Garden Crossbody",
                category: "casual",
                price: 249,
                originalPrice: 349,
                images: ["https://pplx-res.cloudinary.com/image/upload/v1757151194/pplx_project_search_images/9f0f57fc1e614265f4eb58f5c4bf6c4850ac3950.png", "https://pplx-res.cloudinary.com/image/upload/v1757151194/pplx_project_search_images/42ad2d9db329c11583aeb16d03a6d7d2f59ee52f.png"],
                description: "Vibrant floral beadwork on a versatile crossbody design",
                details: "Colorful glass beads, adjustable leather strap, zippered closure",
                rating: 4.7,
                reviews: 156
            },
            {
                id: 4,
                name: "Midnight Glamour Evening Bag",
                category: "party",
                price: 199,
                originalPrice: 299,
                images: ["https://pplx-res.cloudinary.com/image/upload/v1757151194/pplx_project_search_images/752615e4dfdb3b42552f92c0a7ac91760b7d2bbb.png", "images/blackbeadbag.png"],
                description: "Sophisticated black beaded evening bag with crystal accents",
                details: "Premium black beads, Swarovski crystals, satin interior",
                rating: 4.9,
                reviews: 203
            },
            {
                id: 5,
                name: "Ocean Wave Mini Bag",
                category: "casual",
                price: 179,
                originalPrice: 229,
                images: ["https://pplx-res.cloudinary.com/image/upload/v1757151194/pplx_project_search_images/92d3c8deb9e9961f9069a54153e3e2958e11de7a.png", "https://pplx-res.cloudinary.com/image/upload/v1757151197/pplx_project_search_images/4b7889166b941325255d2dd13d20141869627b32.png"],
                description: "Translucent blue beaded mini bag inspired by ocean waves",
                details: "Translucent glass beads, chain strap, compact design",
                rating: 4.6,
                reviews: 94
            },
            {
                id: 6,
                name: "Rose Garden Clutch",
                category: "bridal",
                price: 349,
                originalPrice: 449,
                images: ["https://pplx-res.cloudinary.com/image/upload/v1757151194/pplx_project_search_images/52af984b8a50da87c60ebc9fb5e4af7461d98a01.png", "https://pplx-res.cloudinary.com/image/upload/v1757151194/pplx_project_search_images/00a7f3a57454f2866d0c14b6c2ff4fc9fa5a7047.png"],
                description: "3D rose beadwork clutch with metallic accents",
                details: "Hand-stitched 3D flowers, pearl accents, vintage gold frame",
                rating: 5.0,
                reviews: 67
            }
        ];

        this.testimonials = [
            {
                name: "Sarah Johnson",
                rating: 5,
                text: "Absolutely stunning craftsmanship! My bridal clutch was perfect for my wedding day."
            },
            {
                name: "Emily Chen",
                rating: 5,
                text: "The attention to detail is incredible. Each bead is perfectly placed with such care."
            },
            {
                name: "Maria Rodriguez",
                rating: 4,
                text: "Beautiful bags that always get compliments. Quality is outstanding."
            }
        ];

        this.blog = [
            {
                title: "The Art of Beadwork: Traditional Techniques in Modern Fashion",
                excerpt: "Discover how ancient beading techniques are being preserved and innovated in contemporary luxury fashion.",
                date: "2025-08-15",
                category: "Craftsmanship"
            },
            {
                title: "Styling Your Beaded Bag: From Day to Night",
                excerpt: "Expert tips on how to style your beaded accessories for different occasions and seasons.",
                date: "2025-08-10",
                category: "Fashion Tips"
            },
            {
                title: "Behind the Scenes: Creating a Custom Wedding Clutch",
                excerpt: "Follow the journey of creating a personalized bridal clutch from concept to completion.",
                date: "2025-08-05",
                category: "Behind the Scenes"
            }
        ];

        this.cart = [];
        this.wishlist = [];
        this.currentSection = 'home';
        this.currentCustomStep = 1;
        this.customOrderPrice = 500;
    }

    init() {
        console.log('Initializing WK BAGS App...');
        
        // Wait for DOM to be fully ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApp();
            });
        } else {
            this.setupApp();
        }
    }

    setupApp() {
        try {
            this.setupEventListeners();
            this.loadContent();
            this.setupTypewriterEffect();
            this.hideLoadingScreen();
            
            // Show home section by default
            this.showSection('home');
            
            console.log('WK BAGS App initialized successfully');
        } catch (error) {
            console.error('Error initializing app:', error);
        }
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');

        // Navigation
        const navToggle = document.getElementById('navToggle');
        if (navToggle) {
            navToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMobileMenu();
            });
        }

        // Navigation links
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('href').substring(1);
                console.log('Navigation clicked:', targetSection);
                this.navigateToSection(targetSection);
            });
        });

        // Cart functionality
        const cartBtn = document.getElementById('cartBtn');
        if (cartBtn) {
            cartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Cart button clicked');
                this.toggleCart();
            });
        }

        const cartClose = document.getElementById('cartClose');
        if (cartClose) {
            cartClose.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleCart();
            });
        }

        const cartOverlay = document.getElementById('cartOverlay');
        if (cartOverlay) {
            cartOverlay.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleCart();
            });
        }

        // Modal functionality
        const modalClose = document.getElementById('modalClose');
        if (modalClose) {
            modalClose.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModal();
            });
        }

        const modalOverlay = document.getElementById('modalOverlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModal();
            });
        }

        // Shop filters
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => this.filterProducts());
        }

        const priceFilter = document.getElementById('priceFilter');
        if (priceFilter) {
            priceFilter.addEventListener('change', () => this.filterProducts());
        }

        const sortFilter = document.getElementById('sortFilter');
        if (sortFilter) {
            sortFilter.addEventListener('change', () => this.filterProducts());
        }

        // Hero CTA buttons
        const heroCTA = document.querySelector('.hero__cta');
        if (heroCTA) {
            heroCTA.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Hero CTA clicked - navigating to shop');
                this.navigateToSection('shop');
            });
        }

        const heroCTASecondary = document.querySelector('.hero__cta-secondary');
        if (heroCTASecondary) {
            heroCTASecondary.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Secondary CTA clicked - navigating to about');
                this.navigateToSection('about');
            });
        }

        // Custom order form
        const customNext = document.getElementById('customNext');
        if (customNext) {
            customNext.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextCustomStep();
            });
        }

        const customPrev = document.getElementById('customPrev');
        if (customPrev) {
            customPrev.addEventListener('click', (e) => {
                e.preventDefault();
                this.prevCustomStep();
            });
        }

        const customForm = document.getElementById('customForm');
        if (customForm) {
            customForm.addEventListener('submit', (e) => {
                this.submitCustomOrder(e);
            });
        }

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                this.submitContactForm(e);
            });
        }

        // Scroll handling
        window.addEventListener('scroll', () => this.handleScroll());

        console.log('Event listeners setup complete');
    }

    loadContent() {
        this.loadFeaturedProducts();
        this.loadTestimonials();
        this.loadBlogPosts();
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, options);

        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }, 100);
    }

    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
            }
        }, 2000);
    }

    setupTypewriterEffect() {
        setTimeout(() => {
            const tagline = document.getElementById('heroTagline');
            if (tagline) {
                const text = tagline.textContent;
                tagline.textContent = '';
                tagline.style.opacity = '1';

                let i = 0;
                const typeWriter = () => {
                    if (i < text.length) {
                        tagline.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    }
                };

                typeWriter();
            }
        }, 3000);
    }

    handleScroll() {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }

    toggleMobileMenu() {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        
        if (navMenu && navToggle) {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        }
    }

    navigateToSection(sectionId) {
        console.log('Navigating to section:', sectionId);
        
        this.showSection(sectionId);
        this.currentSection = sectionId;

        // Update navigation active state
        document.querySelectorAll('.nav__link').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Load section-specific content
        if (sectionId === 'shop') {
            this.loadShopProducts();
        }

        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        if (navMenu?.classList.contains('active')) {
            this.toggleMobileMenu();
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showSection(sectionId) {
        console.log('Showing section:', sectionId);
        
        // Hide all main sections
        const allSections = ['hero', 'story', 'featured', 'craftsmanship', 'testimonials', 'shop', 'about', 'custom', 'blog', 'contact'];
        
        allSections.forEach(section => {
            const element = document.getElementById(section) || document.querySelector(`.${section}`);
            if (element) {
                element.classList.add('hidden');
            }
        });

        if (sectionId === 'home') {
            // Show home sections
            document.querySelector('.hero')?.classList.remove('hidden');
            document.querySelector('.story')?.classList.remove('hidden');
            document.querySelector('.featured')?.classList.remove('hidden');
            document.querySelector('.craftsmanship')?.classList.remove('hidden');
            document.querySelector('.testimonials')?.classList.remove('hidden');
        } else {
            // Show specific section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        }
    }

    loadFeaturedProducts() {
        const featuredGrid = document.getElementById('featuredGrid');
        if (!featuredGrid) {
            console.warn('Featured grid not found');
            return;
        }

        const featuredProducts = this.products.slice(0, 4);
        featuredGrid.innerHTML = featuredProducts.map(product => this.createProductCard(product)).join('');
        
        console.log('Featured products loaded');
        
        // Trigger fade-in animation
        setTimeout(() => {
            featuredGrid.querySelectorAll('.fade-in').forEach(el => {
                el.classList.add('visible');
            });
        }, 100);
    }

    loadShopProducts() {
        const shopGrid = document.getElementById('shopGrid');
        if (!shopGrid) {
            console.warn('Shop grid not found');
            return;
        }

        shopGrid.innerHTML = this.products.map(product => this.createProductCard(product)).join('');
        
        console.log('Shop products loaded');
        
        // Trigger fade-in animation
        setTimeout(() => {
            shopGrid.querySelectorAll('.fade-in').forEach(el => {
                el.classList.add('visible');
            });
        }, 100);
    }

    createProductCard(product) {
        const categoryDisplay = {
            'bridal': '💍 Bridal Collection',
            'party': '✨ Party & Evening',
            'casual': '🌸 Casual Luxury',
            'luxury': '👑 Premium Edition'
        };

        const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));

        return `
            <div class="product-card fade-in">
                <div class="product-card__image">
                    <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                    <button class="product-card__wishlist" onclick="window.app.toggleWishlist(${product.id})">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
                <div class="product-card__content">
                    <div class="product-card__category">${categoryDisplay[product.category]}</div>
                    <h3 class="product-card__name">${product.name}</h3>
                    <div class="product-card__price">
                        <span class="product-card__price-current">₹${product.price}</span>
                        ${product.originalPrice ? `<span class="product-card__price-original">₹${product.originalPrice}</span>` : ''}
                    </div>
                    <div class="product-card__rating">
                        <span class="product-card__stars">${stars}</span>
                        <span class="product-card__reviews">(${product.reviews})</span>
                    </div>
                    <div class="product-card__actions">
                        <button class="product-card__quick-view" onclick="window.app.showProductDetail(${product.id})">
                            Quick View
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    showProductDetail(productId) {
        console.log('Showing product detail for:', productId);
        
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            console.error('Product not found:', productId);
            return;
        }

        const modal = document.getElementById('productModal');
        const productDetail = document.getElementById('productDetail');

        if (!modal || !productDetail) {
            console.error('Modal elements not found');
            return;
        }

        const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));

        productDetail.innerHTML = `
            <div class="product-detail__gallery">
                <img src="${product.images[0]}" alt="${product.name}" class="product-detail__main-image" id="mainImage">
                <div class="product-detail__thumbnails">
                    ${product.images.map((img, index) => `
                        <img src="${img}" alt="${product.name}" class="product-detail__thumbnail ${index === 0 ? 'active' : ''}" 
                             onclick="window.app.changeMainImage('${img}', this)">
                    `).join('')}
                </div>
            </div>
            <div class="product-detail__info">
                <div class="product-detail__category">${product.category.toUpperCase()}</div>
                <h2 class="product-detail__name">${product.name}</h2>
                <div class="product-detail__price">
                    <span class="product-detail__price-current">₹${product.price}</span>
                    ${product.originalPrice ? `<span class="product-detail__price-original">₹${product.originalPrice}</span>` : ''}
                </div>
                <div class="product-detail__rating">
                    <span class="product-detail__stars">${stars}</span>
                    <span class="product-detail__reviews">(${product.reviews} reviews)</span>
                </div>
                <p class="product-detail__description">${product.description}</p>
                <div class="product-detail__details">
                    <strong>Details:</strong> ${product.details}
                </div>
                <div class="product-detail__options">
                    <div class="product-detail__option-group">
                        <label class="product-detail__option-label">Color</label>
                        <div class="product-detail__colors">
                            <div class="product-detail__color active" style="background: #f8f6f0;" data-color="pearl"></div>
                            <div class="product-detail__color" style="background: #d4af37;" data-color="gold"></div>
                            <div class="product-detail__color" style="background: #1a1a1a;" data-color="black"></div>
                        </div>
                    </div>
                </div>
                <div class="product-detail__quantity">
                    <label class="product-detail__option-label">Quantity</label>
                    <div class="product-detail__quantity-control">
                        <button type="button" class="product-detail__quantity-btn" onclick="window.app.changeQuantity(-1)">-</button>
                        <input type="number" class="product-detail__quantity-input" value="1" min="1" id="productQuantity">
                        <button type="button" class="product-detail__quantity-btn" onclick="window.app.changeQuantity(1)">+</button>
                    </div>
                </div>
                <div class="product-detail__actions">
                    <button class="btn btn--primary" onclick="window.app.addToCart(${product.id})">Add to Cart</button>
                    <button class="btn btn--outline" onclick="window.app.toggleWishlist(${product.id})">Add to Wishlist</button>
                </div>
            </div>
        `;

        // Setup color selection
        productDetail.querySelectorAll('.product-detail__color').forEach(color => {
            color.addEventListener('click', function() {
                productDetail.querySelectorAll('.product-detail__color').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
            });
        });

        modal.classList.remove('hidden');
        console.log('Product modal opened');
    }

    changeMainImage(src, thumbnail) {
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            mainImage.src = src;
        }

        document.querySelectorAll('.product-detail__thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        thumbnail.classList.add('active');
    }

    changeQuantity(delta) {
        const quantityInput = document.getElementById('productQuantity');
        if (quantityInput) {
            const currentValue = parseInt(quantityInput.value);
            const newValue = Math.max(1, currentValue + delta);
            quantityInput.value = newValue;
        }
    }

    closeModal() {
        const modal = document.getElementById('productModal');
        if (modal) {
            modal.classList.add('hidden');
            console.log('Product modal closed');
        }
    }

    addToCart(productId) {
        console.log('Adding to cart:', productId);
        
        const product = this.products.find(p => p.id === productId);
        const quantityInput = document.getElementById('productQuantity');
        const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

        if (product) {
            const existingItem = this.cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.cart.push({ ...product, quantity });
            }

            this.updateCartUI();
            this.showNotification('Product added to cart!');
            this.closeModal();
            
            console.log('Cart updated:', this.cart);
        }
    }

    toggleWishlist(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingIndex = this.wishlist.findIndex(item => item.id === productId);
        if (existingIndex > -1) {
            this.wishlist.splice(existingIndex, 1);
            this.showNotification('Removed from wishlist');
        } else {
            this.wishlist.push(product);
            this.showNotification('Added to wishlist');
        }

        this.updateWishlistUI();
    }

    toggleCart() {
        console.log('Toggling cart sidebar');
        
        const cartSidebar = document.getElementById('cartSidebar');
        if (cartSidebar) {
            cartSidebar.classList.toggle('hidden');
            if (!cartSidebar.classList.contains('hidden')) {
                this.updateCartItems();
                console.log('Cart sidebar opened');
            } else {
                console.log('Cart sidebar closed');
            }
        }
    }

    updateCartUI() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    updateWishlistUI() {
        const wishlistCount = document.getElementById('wishlistCount');
        if (wishlistCount) {
            wishlistCount.textContent = this.wishlist.length;
            wishlistCount.style.display = this.wishlist.length > 0 ? 'flex' : 'none';
        }
    }

    updateCartItems() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        if (!cartItems || !cartTotal) return;

        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                    <p>Your cart is empty</p>
                    <button class="btn btn--outline" onclick="window.app.navigateToSection('shop')">Start Shopping</button>
                </div>
            `;
            cartTotal.textContent = '0';
            return;
        }

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                <img src="${item.images[0]}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                <div style="flex: 1;">
                    <h4 style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: var(--luxury-pearl);">${item.name}</h4>
                    <div style="color: var(--luxury-gold); font-size: 0.9rem;">₹${item.price} × ${item.quantity}</div>
                </div>
                <button onclick="window.app.removeFromCart(${item.id})" style="background: none; border: none; color: var(--luxury-pearl); font-size: 1.2rem; cursor: pointer; padding: 0.25rem;">×</button>
            </div>
        `).join('');

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total;
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCartUI();
        this.updateCartItems();
        this.showNotification('Product removed from cart');
    }

    filterProducts() {
        const categoryFilter = document.getElementById('categoryFilter')?.value;
        const priceFilter = document.getElementById('priceFilter')?.value;
        const sortFilter = document.getElementById('sortFilter')?.value;

        let filteredProducts = [...this.products];

        if (categoryFilter) {
            filteredProducts = filteredProducts.filter(product => 
                product.category === categoryFilter
            );
        }

        if (priceFilter && priceFilter !== '') {
            if (priceFilter === '600+') {
                filteredProducts = filteredProducts.filter(product => product.price >= 600);
            } else {
                const [min, max] = priceFilter.split('-').map(p => parseInt(p));
                filteredProducts = filteredProducts.filter(product => 
                    product.price >= min && product.price <= max
                );
            }
        }

        switch (sortFilter) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                filteredProducts.reverse();
                break;
        }

        const shopGrid = document.getElementById('shopGrid');
        if (shopGrid) {
            shopGrid.innerHTML = filteredProducts.map(product => this.createProductCard(product)).join('');
            
            setTimeout(() => {
                shopGrid.querySelectorAll('.fade-in').forEach(el => {
                    el.classList.add('visible');
                });
            }, 100);
        }
    }

    loadTestimonials() {
        const testimonialsSlider = document.getElementById('testimonialsSlider');
        if (!testimonialsSlider) return;

        testimonialsSlider.innerHTML = this.testimonials.map(testimonial => {
            const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
            return `
                <div class="testimonial fade-in">
                    <div class="testimonial__stars">${stars}</div>
                    <p class="testimonial__text">"${testimonial.text}"</p>
                    <div class="testimonial__author">${testimonial.name}</div>
                </div>
            `;
        }).join('');
    }

    loadBlogPosts() {
        const blogGrid = document.getElementById('blogGrid');
        if (!blogGrid) return;

        blogGrid.innerHTML = this.blog.map(post => `
            <article class="blog-card fade-in">
                <h3 class="blog-card__title">${post.title}</h3>
                <div class="blog-card__meta">${post.date} • ${post.category}</div>
                <p class="blog-card__excerpt">${post.excerpt}</p>
                <button class="btn btn--outline" onclick="window.app.showNotification('Blog post coming soon!')">Read More</button>
            </article>
        `).join('');
    }

    // Custom order and contact form methods
    nextCustomStep() {
        if (this.currentCustomStep < 4) {
            const currentStep = document.querySelector('.custom__step.active');
            const nextStep = document.querySelector(`[data-step="${this.currentCustomStep + 1}"]`);

            if (currentStep && nextStep) {
                currentStep.classList.remove('active');
                nextStep.classList.add('active');
                this.currentCustomStep++;
                this.updateCustomNavigation();
                this.updateCustomPrice();
            }
        }
    }

    prevCustomStep() {
        if (this.currentCustomStep > 1) {
            const currentStep = document.querySelector('.custom__step.active');
            const prevStep = document.querySelector(`[data-step="${this.currentCustomStep - 1}"]`);

            if (currentStep && prevStep) {
                currentStep.classList.remove('active');
                prevStep.classList.add('active');
                this.currentCustomStep--;
                this.updateCustomNavigation();
            }
        }
    }

    updateCustomNavigation() {
        const prevBtn = document.getElementById('customPrev');
        const nextBtn = document.getElementById('customNext');
        const submitBtn = document.getElementById('customSubmit');

        if (prevBtn && nextBtn && submitBtn) {
            prevBtn.style.display = this.currentCustomStep === 1 ? 'none' : 'block';
            nextBtn.style.display = this.currentCustomStep === 4 ? 'none' : 'block';
            submitBtn.style.display = this.currentCustomStep === 4 ? 'block' : 'none';
        }
    }

    updateCustomPrice() {
        const formData = new FormData(document.getElementById('customForm'));
        let price = 500;

        const bagType = formData.get('bagType');
        const colors = formData.getAll('colors');
        const personalization = formData.get('personalizationType');

        if (bagType === 'tote') price += 200;
        if (bagType === 'handbag') price += 150;
        if (colors.length > 1) price += colors.length * 50;
        if (personalization && personalization !== '') price += 100;

        this.customOrderPrice = price;
        const customPrice = document.getElementById('customPrice');
        if (customPrice) {
            customPrice.textContent = `₹${price}`;
        }
    }

    submitCustomOrder(e) {
        e.preventDefault();
        this.showNotification('Custom order submitted successfully! We will contact you soon.');
        e.target.reset();
        this.currentCustomStep = 1;
        document.querySelector('.custom__step.active')?.classList.remove('active');
        document.querySelector('[data-step="1"]')?.classList.add('active');
        this.updateCustomNavigation();
    }

    submitContactForm(e) {
        e.preventDefault();
        this.showNotification('Message sent successfully! We will get back to you soon.');
        e.target.reset();
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--luxury-gold);
            color: var(--luxury-dark);
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: 500;
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the app
console.log('Starting WK BAGS Application...');
const app = new WKBagsApp();
window.app = app;
app.init();