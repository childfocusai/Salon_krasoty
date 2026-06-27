(function () {
  'use strict';

  var header = document.getElementById('header');
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var bookingForm = document.getElementById('booking-form');
  var formSuccess = document.getElementById('form-success');
  var formResetBtn = document.getElementById('form-reset');
  var phoneInput = document.getElementById('phone');
  var toast = document.getElementById('toast');

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Mobile menu ---- */
  function openMenu() {
    nav.classList.add('is-open');
    burger.classList.add('is-active');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрыть меню');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    burger.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    document.body.classList.remove('menu-open');
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        burger.focus();
      }
    });
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      closeMenu();

      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });

      if (targetId === '#booking') {
        var nameField = document.getElementById('name');
        if (nameField) {
          setTimeout(function () { nameField.focus(); }, prefersReducedMotion ? 0 : 400);
        }
      }
    });
  });

  /* ---- Header scroll state ---- */
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Reveal animations ---- */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---- Phone mask ---- */
  function formatPhone(value) {
    var digits = value.replace(/\D/g, '');

    if (digits.startsWith('8')) {
      digits = '7' + digits.slice(1);
    }
    if (!digits.startsWith('7') && digits.length > 0) {
      digits = '7' + digits;
    }

    digits = digits.slice(0, 11);

    var formatted = '+7';
    if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
    if (digits.length >= 4) formatted += ') ' + digits.slice(4, 7);
    if (digits.length >= 7) formatted += '-' + digits.slice(7, 9);
    if (digits.length >= 9) formatted += '-' + digits.slice(9, 11);

    return formatted;
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      phoneInput.value = formatPhone(phoneInput.value);
    });

    phoneInput.addEventListener('focus', function () {
      if (!phoneInput.value) {
        phoneInput.value = '+7 (';
      }
    });

    phoneInput.addEventListener('blur', function () {
      if (phoneInput.value === '+7 (' || phoneInput.value === '+7') {
        phoneInput.value = '';
      }
    });
  }

  /* ---- Form validation ---- */
  function showFieldError(fieldId, message) {
    var field = document.getElementById(fieldId);
    var errorEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.add('is-invalid');
    if (errorEl) errorEl.textContent = message;
  }

  function clearFieldError(fieldId) {
    var field = document.getElementById(fieldId);
    var errorEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.remove('is-invalid');
    if (errorEl) errorEl.textContent = '';
  }

  function validateName(value) {
    return value.trim().length >= 2;
  }

  function validatePhone(value) {
    var digits = value.replace(/\D/g, '');
    return digits.length === 11 && digits.startsWith('7');
  }

  function validateService(value) {
    return value !== '';
  }

  function validateForm() {
    var name = document.getElementById('name').value;
    var phone = phoneInput ? phoneInput.value : '';
    var service = document.getElementById('service').value;
    var isValid = true;

    clearFieldError('name');
    clearFieldError('phone');
    clearFieldError('service');

    if (!validateName(name)) {
      showFieldError('name', 'Введите имя (минимум 2 символа)');
      isValid = false;
    }

    if (!validatePhone(phone)) {
      showFieldError('phone', 'Введите корректный номер телефона');
      isValid = false;
    }

    if (!validateService(service)) {
      showFieldError('service', 'Выберите услугу');
      isValid = false;
    }

    return isValid;
  }

  /* ---- Toast ---- */
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add('is-visible');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-visible');
      setTimeout(function () { toast.hidden = true; }, 300);
    }, 4000);
  }

  /* ---- Form submit ---- */
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validateForm()) {
        var firstInvalid = bookingForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      bookingForm.hidden = true;
      if (formSuccess) formSuccess.hidden = false;

      showToast('Заявка принята — мы перезвоним вам');
    });

    ['name', 'phone', 'service'].forEach(function (fieldId) {
      var field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener('input', function () {
          clearFieldError(fieldId);
        });
        field.addEventListener('change', function () {
          clearFieldError(fieldId);
        });
      }
    });
  }

  if (formResetBtn && bookingForm && formSuccess) {
    formResetBtn.addEventListener('click', function () {
      bookingForm.reset();
      bookingForm.hidden = false;
      formSuccess.hidden = true;
      clearFieldError('name');
      clearFieldError('phone');
      clearFieldError('service');
      document.getElementById('name').focus();
    });
  }

  /* ---- Min date for booking ---- */
  var dateInput = document.getElementById('date');
  if (dateInput) {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = yyyy + '-' + mm + '-' + dd;
  }
})();
