
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 50,
          stagePadding: 70,
          autoWidth: true,
          items: 3,
          center: true,
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause: true,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn', 
          smartSpeed: 1000,
          responsiveClass: true,
          nav: true,
          responsive: false,
        });

        const navbar=document.getElementsByTagName('nav')[0];
        window.addEventListener('scroll', function() {
            console.log(window.scrollY);
            if(this.window.scrollY > 1){
                navbar.classList.replace('bg-transparent', 'nav-color');
            }else if(this.window.scrollY <= 0){
                navbar.classList.replace('nav-color', 'bg-transparent');
            }
            
        })

        const menuToggle = document.querySelector('.navbar-toggler');
        const nav = document.querySelector('navbar-nav');


        menuToggle.addEventListener('click', function(){
            nav.classList.toggle('slide');
        });

 

        // Ambil elemen overlay
        var overlay = document.getElementById("overlay");

        // Fungsi untuk menampilkan/menyembunyikan overlay
        function toggleOverlay() {
        overlay.style.display = overlay.style.display === "block" ? "none" : "block";
        }

        // Ambil elemen tombol toggler
        var toggleButton = document.querySelector(".navbar-toggler");

        // Tambahkan event listener untuk mengaktifkan fungsi toggleOverlay saat tombol toggler di klik
        toggleButton.addEventListener("click", toggleOverlay);

