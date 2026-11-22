(function () {
  const FB_URL = 'https://kerlos-hany-default-rtdb.europe-west1.firebasedatabase.app';
  const PROFILE_URL = 'https://www.behance.net/kerloshany11';

  function resolveProjectBehanceUrl(project) {
    if (project && typeof project.url === 'string' && /behance\.net\/gallery\//i.test(project.url.trim())) {
      return project.url.trim();
    }
    const id = window.currentModalProjectId;
    const list = Array.isArray(window.projectsData) ? window.projectsData : [];
    const cur = id ? list.find(p => p && p.id === id) : null;
    if (cur && typeof cur.url === 'string' && /behance\.net\/gallery\//i.test(cur.url.trim())) {
      return cur.url.trim();
    }
    const modalLink = document.getElementById('pm-behance-link');
    if (modalLink && modalLink.href && /behance\.net\/gallery\//i.test(modalLink.href)) {
      return modalLink.href;
    }
    return PROFILE_URL;
  }

  function wireBehanceButtons(project) {
    const targetUrl = resolveProjectBehanceUrl(project);

    const pmLink = document.getElementById('pm-behance-link');
    if (pmLink) {
      pmLink.href = targetUrl;
      pmLink.target = '_blank';
      pmLink.rel = 'noopener noreferrer';
      pmLink.style.display = '';
    }

    const streamEl = document.getElementById('pm-media-stream');
    if (streamEl) {
      streamEl.querySelectorAll('a[href*="behance.net"]').forEach((a) => {
        a.href = targetUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      });
    }
  }

  function classifyMediaUrl(raw) {
    if (!raw || typeof raw !== 'string') return null;
    let u = raw.trim();
    if (!u) return null;

    if (/dropbox\.com/i.test(u)) {
      u = u.replace(/[?&]dl=0/i, '').replace(/www\.dropbox\.com/i, 'dl.dropboxusercontent.com');
      if (/\.(mp4|webm|mov|m4v)/i.test(u)) return { type: 'video', kind: 'mp4', url: u };
    }

    const gdrive = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]{10,})/i);
    if (gdrive) {
      return { type: 'video', kind: 'iframe', url: `https://drive.google.com/file/d/${gdrive[1]}/preview` };
    }

    if (u.startsWith('data:video/') || /\.(mp4|webm|mov|m4v)(\?|$)/i.test(u) || /res\.cloudinary\.com\/.*\/video\/upload/i.test(u)) {
      return { type: 'video', kind: 'mp4', url: u };
    }

    const yt = u.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);
    if (yt) {
      return { type: 'video', kind: 'iframe', url: `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0&playsinline=1` };
    }

    const vm = u.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    if (vm) {
      return { type: 'video', kind: 'iframe', url: `https://player.vimeo.com/video/${vm[1]}` };
    }

    if (/www-ccv\.adobe\.io\/v1\/player\/ccv\/|behance\.net\/embed\//i.test(u)) {
      return { type: 'video', kind: 'adobe', url: u };
    }

    if (/\.(png|jpe?g|webp|gif|avif)(\?|$)/i.test(u) || /mir-s3-cdn-cf\.behance\.net/i.test(u) || /lh3\.googleusercontent\.com/i.test(u) || /res\.cloudinary\.com\/.*\/image\/upload/i.test(u)) {
      return { type: 'image', kind: 'img', url: u };
    }

    return null;
  }

  function buildImageCandidates(raw) {
    if (!raw || typeof raw !== 'string') return [];
    const u = raw.trim();
    const out = [];
    if (/mir-s3-cdn-cf\.behance\.net\/project_modules\//i.test(u)) {
      const up = u.replace(/\/project_modules\/(?:disp|max_1200|2800_opt_1)\//i, '/project_modules/1400/');
      if (up !== u) out.push(up);
    }
    out.push(u);
    return [...new Set(out)];
  }

  function polishModalMedia(project) {
    const streamEl = document.getElementById('pm-media-stream');
    if (!streamEl || !project) return;
    if (streamEl.dataset.khPolished === '1') {
      wireBehanceButtons(project);
      return;
    }

    const isAr = typeof currentLang !== 'undefined' && currentLang === 'ar';
    const title = isAr ? (project.titleAr || project.titleEn || '') : (project.titleEn || project.titleAr || '');
    const behanceHref = resolveProjectBehanceUrl(project);

    const allImgs = [...streamEl.querySelectorAll('img')];
    const validImgs = [];
    const seenSrc = new Set();

    allImgs.forEach((img) => {
      const src = (img.currentSrc || img.getAttribute('src') || '').trim();
      const fig = img.closest('figure');
      if (!src || seenSrc.has(src)) {
        if (fig) fig.remove();
        return;
      }
      seenSrc.add(src);
      const cands = buildImageCandidates(src);
      img.setAttribute('data-cands', JSON.stringify(cands));
      img.setAttribute('data-cidx', '0');
      img.src = cands[0];
      img.className = 'w-full h-auto object-contain block mx-auto';
      img.onerror = function () {
        try {
          const list = JSON.parse(this.getAttribute('data-cands') || '[]');
          const next = parseInt(this.getAttribute('data-cidx') || '0', 10) + 1;
          if (next < list.length) {
            this.setAttribute('data-cidx', String(next));
            this.src = list[next];
            return;
          }
        } catch (e) {}
        const parentFig = this.closest('figure') || this.parentElement;
        if (parentFig) parentFig.remove();
      };
      validImgs.push(img);
    });

    if (validImgs.length > 0) {
      const wrap = document.createElement('div');
      wrap.className = 'w-full max-w-4xl mx-auto space-y-4';
      validImgs.forEach((img) => {
        const fig = document.createElement('figure');
        fig.className = 'w-full rounded-2xl overflow-hidden border border-[#C59367]/25 bg-[#060D0C] shadow-xl';
        img.alt = title || 'Project Board';
        fig.appendChild(img);
        wrap.appendChild(fig);
      });
      streamEl.querySelectorAll('img').forEach((oldImg) => {
        const oldFig = oldImg.closest('figure');
        if (oldFig && oldFig.parentNode) oldFig.parentNode.removeChild(oldFig);
      });
      streamEl.appendChild(wrap);
    }

    streamEl.querySelectorAll('iframe').forEach((ifr) => {
      const src = ifr.getAttribute('src') || '';
      if (/www-ccv\.adobe\.io/i.test(src)) {
        const card = document.createElement('div');
        card.className = 'w-full max-w-4xl mx-auto rounded-2xl border border-[#C59367]/40 bg-[#060D0C] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl';
        card.innerHTML = `
          <div class="space-y-1 text-center sm:text-start">
            <div class="text-sm font-bold text-[#F2EADF]">${isAr ? 'فيديو Behance المدمج' : 'Behance Embedded Video'}</div>
            <div class="text-xs text-[#9A9186]">${isAr ? 'مشغل Adobe يمنع التشغيل المباشر خارج Behance. افتح صفحة المشروع لمشاهدة الفيديو بجودته الكاملة.' : 'Adobe player blocks external playback. Open the project page to watch the full video.'}</div>
          </div>
          <a href="${behanceHref}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C59367] to-[#A06620] text-[#060D0C] text-xs font-extrabold shrink-0">${isAr ? 'مشاهدة على Behance ↗' : 'WATCH ON BEHANCE ↗'}</a>
        `;
        const fig = ifr.closest('figure');
        if (fig) fig.replaceWith(card);
        else ifr.replaceWith(card);
      }
    });

    streamEl.dataset.khPolished = '1';
    wireBehanceButtons(project);
  }

  function hookModal() {
    if (typeof window.openProjectModal === 'function' && !window.__khMediaPatchHooked) {
      window.__khMediaPatchHooked = true;
      const prevOpen = window.openProjectModal;
      window.openProjectModal = function (id, focusVideo) {
        const streamEl = document.getElementById('pm-media-stream');
        if (streamEl) delete streamEl.dataset.khPolished;
        const res = prevOpen.apply(this, arguments);
        const list = Array.isArray(window.projectsData) ? window.projectsData : [];
        const proj = list.find((item) => item && item.id === id);
        wireBehanceButtons(proj);
        setTimeout(() => polishModalMedia(proj), 80);
        return res;
      };
    }
  }

  window.addProjectMedia = async function (projectIdOrUrl, mediaUrls) {
    const urls = Array.isArray(mediaUrls) ? mediaUrls : [mediaUrls];
    const list = Array.isArray(window.projectsData) ? window.projectsData : [];
    const proj = list.find((p) => p && (p.id === projectIdOrUrl || p.url === projectIdOrUrl || (p.titleEn && p.titleEn.toLowerCase().includes(String(projectIdOrUrl).toLowerCase()))));
    if (!proj) {
      console.warn('Project not found:', projectIdOrUrl);
      return false;
    }

    if (!Array.isArray(proj.mediaGallery)) proj.mediaGallery = [];
    if (!Array.isArray(proj.videos)) proj.videos = [];

    urls.forEach((rawUrl, idx) => {
      const info = classifyMediaUrl(rawUrl);
      if (!info) return;
      if (info.type === 'video') {
        const kind = info.kind === 'adobe' ? 'iframe' : info.kind;
        proj.videos.push({ url: info.url, kind });
        proj.hasVideo = true;
        proj.videoDetectedOnly = false;
      } else {
        const cands = buildImageCandidates(info.url);
        proj.mediaGallery.push({
          src: cands[0],
          srcCandidates: cands,
          captionEn: `Extra Board ${idx + 1}`,
          captionAr: `لوحة إضافية ${idx + 1}`
        });
      }
    });

    if (proj.url && /behance\.net\/gallery\/(\d+)/i.test(proj.url)) {
      const m = proj.url.match(/behance\.net\/gallery\/(\d+)/i);
      const key = 'bh_' + m[1];
      await fetch(`${FB_URL}/behanceCache/${key}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: proj.url,
          mediaGallery: proj.mediaGallery,
          videos: proj.videos,
          hasVideo: Boolean(proj.hasVideo),
          videoDetectedOnly: false,
          enriched: true,
          updatedAt: Date.now()
        })
      });
    }

    const streamEl = document.getElementById('pm-media-stream');
    if (streamEl) delete streamEl.dataset.khPolished;
    if (typeof window.renderProjects === 'function') window.renderProjects();
    if (typeof window.openProjectModal === 'function') window.openProjectModal(proj.id);
    console.log('Media added & saved:', proj.titleEn);
    return true;
  };

  hookModal();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hookModal);
  }
})();
