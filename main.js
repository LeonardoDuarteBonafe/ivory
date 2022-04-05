window.addEventListener("DOMContentLoaded", function () {

    AOS.init();
    
    $('.nav-list li a').click(function(){
        $('.nav-list li a').each(function(){
            $(this).removeClass("active-navbar");
        })
        $(this).addClass("active-navbar");
    })
    
    $('.materiais .topbar .menu p').click(function(){
        var id = $(this).attr('id');
        var imageUrl = "Images/Materiais/" + id;
        
        $('.materiais .imagens .small').children("img").eq(0).attr('src', imageUrl + "/small1.webp");
        $('.materiais .imagens .small').children("img").eq(1).attr('src', imageUrl + "/small2.webp");
        $('.materiais .imagens .big').children("img").attr('src', imageUrl + "/big.webp");
        
        $(this).addClass('active-material').siblings().removeClass('active-material');
        
        $('.materiais .imagens .small').children("img").eq(0).addClass('active-image');
        $('.materiais .imagens .small').children("img").eq(1).addClass('active-image');
        $('.materiais .imagens .big').children("img").addClass('active-image');
        
        $('.materiais .imagens .small').children("img").eq(0).on("animationend", function(){
            $(this).removeClass('active-image');
        }); 
       $('.materiais .imagens .small').children("img").eq(1).on("animationend", function(){
            $(this).removeClass('active-image');
        }); 
        $('.materiais .imagens .big').children("img").on("animationend", function(){
            $(this).removeClass('active-image');
        }); 
    })
    
    $('.galeria .imagens img').click(function(){
        var imagemPequenaId = $(this).attr('id');
        var imagemGrandeId = $('.galeria .banner img').attr('id');
        var imagemUrl = "Images/Galeria/imagem";
        console.log("clicou" + imagemPequenaId);
        
        $('.galeria .banner img').attr('id', imagemPequenaId);
        $('.galeria .banner img').attr('src', imagemUrl + imagemPequenaId + ".webp");
        
        $(this).attr('id', imagemGrandeId);
        $(this).attr('src',  imagemUrl + imagemGrandeId + ".webp");
    });

    class MobileNavbar{
        constructor(mobileMenu, navList, navLinks){
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "active";
            this.handleClick = this.handleClick.bind(this);
        }

        animateLinks(){
            this.navLinks.forEach((link, index) => {
                link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`);
            });
        }

        handleClick(){
            this.navList.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);
            this.animateLinks();
        }

        addClickEvent(){
            this.mobileMenu.addEventListener("click", this.handleClick);
        }

        init(){
            if(this.mobileMenu){
                this.addClickEvent();
            }
        }
    }

    const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
    );

    mobileNavbar.init();

});