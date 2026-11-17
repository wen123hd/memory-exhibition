// 预设藏品（固定，永远不从本地读）
const defaultItems = [
    {
        id:1,
        author:"旧时光收藏家",
        name:"搪瓷茶缸",
        year:"70-80年代",
        desc:"七八十年代家家户户常见的饮水器具，很多印有标语，磕碰掉瓷是岁月留下的痕迹。",
        story:"奶奶总用这只茶缸泡茶，缸沿磕掉的那块瓷，是她侍弄了一辈子菜园留下的印记。每次回老家，她还是会用这只缸子给我倒上一杯温热的茶。",
        img:"images/beizi.jpg",
        comments:[
            {nick:"旧物控小林",content:"我家也有一个一模一样的！我妈说这还是她当年结婚时买的陪嫁。"},
            {nick:"岁月留痕",content:"缸沿这掉瓷的痕迹太有年代感了，一看就是用了一二十年的老物件。"},
            {nick:"南巷阿珍",content:"小时候我就用这种缸子喝自来水，凉凉的，夏天特别解渴。"}
        ]
    },
    {
        id:2,
        author:"巷口少年",
        name:"磁带随身听",
        year:"90年代",
        desc:"曾经年轻人的潮流单品，一盒磁带，就是一整个时代的流行音乐。",
        story:"高三那年的晚自习，我把随身听藏在书堆后面，一盘磁带翻来覆去地听。同桌和我轮换着耳机，那是我们关于青春最具体的记忆。",
        img:"images/suishenting.jpg",
        comments:[
            {nick:"耳机线缠成结",content:"当年省吃俭用攒钱买磁带，一盘听烂了还舍不得扔。"},
            {nick:"八十 Conversation 少年",content:"这外形一眼认出，我那台还是卧铺火车上听歌时弄丢的，心疼好久。"},
            {nick:"磁带收藏家",content:"建议把磁带也一起展览，封面的歌词本才是精华啊！"}
        ]
    },
    {
        id:3,
        author:"滴答先生",
        name:"机械挂钟",
        year:"80年代",
        desc:"需要上发条才能走动，滴答滴答的钟声，是许多人童年的背景音。",
        story:"家里的老挂钟挂在堂屋正中，每到整点就当当地敲响。小时候总嫌它吵，后来离家求学，夜深人静时竟格外想念那熟悉的滴答声。",
        img:"images/guazhong.jpg",
        comments:[
            {nick:"整点报时",content:"听到滴答声就像回到小时候，我家的挂钟也是这个样式。"},
            {nick:"木门前的光",content:"这种钟要记得上发条，我奶奶每周日都会踩着凳子拧一次。"},
            {nick:"慢生活",content:"现在都是电子钟了，反而怀念这种有节奏的机械声。"}
        ]
    },
    {
        id:4,
        author:"小人书大王",
        name:"纸质连环画",
        year:"70-90年代",
        desc:"小人书，没有手机的年代，一代人最重要的休闲读物。",
        story:"小时候攒着零花钱去书摊租小人书，一毛钱一本，能看上一整个下午。书页被翻得卷了边，那些英雄的故事，是我最初对世界的想象。",
        img:"images/lianhuanhua.jpg",
        comments:[
            {nick:"小人书迷",content:"一毛钱租一本，我小时候能蹲在书摊看一下午，妈妈的叫都听不见。"},
            {nick:"翻旧的童年",content:"封面上英雄的形象记得清清楚楚，那时候的画工现在看依然经典。"},
            {nick:"旧书摊主",content:"这套要是齐的话现在可值钱了，品相好的一本能卖好几百。"}
        ]
    },
    // ↓ 新增 6 件：图片路径留空，等图片备好后填到 img 字段即可
    {
        id:5,
        author:"缝缝补补",
        name:"老式缝纫机",
        year:"70-80年代",
        desc:"脚踏板一起一落，嗒嗒嗒的声响里，一家人过年的新衣就这么缝出来了。",
        story:"母亲踩着这台缝纫机给我做过书包，也补过无数次磨破的裤膝盖。它比我年纪还大，如今静静放在阳台角落，踩板还在，只是再没人踩了。",
        img:"images/fenrenji.jpg",
        comments:[
            {nick:"新三年旧三年",content:"我妈的嫁妆就是一台缝纫机，我的裤子校服全靠它缝补。"},
            {nick:"哒哒哒",content:"这声音太熟悉了，小时候就在脚踩的哒哒声里写作业的。"},
            {nick:"补丁摞补丁",content:"现在没人补衣服了，这种老手艺和老机器真该好好留着。"}
        ]
    },
    {
        id:6,
        author:"雪花屏幕",
        name:"黑白电视机",
        year:"80年代",
        desc:"十四寸的小小屏幕，全家搬着凳子围着看，信号不好时还得有人爬上去拍天线。",
        story:"小时候一到晚上，邻居家小孩都跑来看电视。天线要转到一个刚好不雪花的角度，谁都不敢动。电视里的故事和电视外的我们，一起填满了那个年代的夜晚。",
        img:"images/dianshiji.jpg",
        comments:[
            {nick:"搬凳子看电视",content:"全村人挤在三尺屏幕前看电视的画面，现在想起来都觉得温暖。"},
            {nick:"天线要手动调",content:"信号不好就爬房顶转天线，我在下面喊'往左往右'，特别有画面感。"},
            {nick:"雪花点也快乐",content:"那时候只有几个台，雪花屏也能看得津津有味，简单纯粹。"}
        ]
    },
    {
        id:7,
        author:"灯下黄昏",
        name:"煤油灯",
        year:"50-70年代",
        desc:"停电的夜里，一盏煤油灯照亮饭桌，也照亮了孩子写作业的练习本。",
        story:"那时常常停电，奶奶就把煤油灯点上，灯芯要时不时挑一下才不会暗。我在灯下写字，鼻尖全是煤油味，如今想起来，竟有点想念。",
        img:"images/deng.jpg",
        comments:[
            {nick:"停电的夜晚",content:"停电时点起煤油灯，全家围着吃饭，灯光昏黄却格外温馨。"},
            {nick:"灯下写作业",content:"小时候就在这种灯下写作业，鼻尖都是煤油味，现在很怀念。"},
            {nick:"外婆的灯",content:"我外婆家直到我上初中还在用，灯罩擦得锃亮。"}
        ]
    },
    {
        id:8,
        author:"铁皮盒子",
        name:"铁皮文具盒",
        year:"80-90年代",
        desc:"印着卡通图案的铁皮盒子，啪嗒一声扣上，里面藏着铅笔、橡皮和小小的秘密。",
        story:"开学时最期待的就是新文具盒，上面的图案能炫耀一整个学期。盒盖上那道我小时候摔出来的凹痕，同桌笑了我好久，却一直舍不得换。",
        img:"images/wenjuhe.jpg",
        comments:[
            {nick:"啪嗒一声",content:"开盖那声'啪嗒'太经典了，上课偷偷打开还怕被老师发现。"},
            {nick:"里面的乘法表",content:"盒盖内侧印着乘法口诀表，考试前我还偷偷看过。"},
            {nick:"同桌的你",content:"我那个盒子被我贴满贴纸，毕业时同桌还借去留了影。"}
        ]
    },
    {
        id:9,
        author:"暖水瓶阿姨",
        name:"老式热水瓶",
        year:"70-90年代",
        desc:"红漆外壳、牡丹花图案，灌满开水能暖一整夜，是家里待客的标配。",
        story:"来客人时，奶奶总会从这个热水瓶里倒一杯滚烫的水。瓶塞是软木的，拔出来噗的一声，白气腾腾。那杯水的温度，就是家的温度。",
        img:"images/reshuiping.jpg",
        comments:[
            {nick:"暖水瓶阿姨",content:"红漆牡丹花，家家户户都有，冬天灌满热水能暖一整夜。"},
            {nick:"软木塞的味道",content:"拔开瓶塞那股热气，配上淡淡的水垢味，是家的味道。"},
            {nick:"待客必备",content:"来客人第一件事就是倒水，这个瓶子可是家里的门面。"}
        ]
    },
    {
        id:10,
        author:"九十年代老板",
        name:"大哥大",
        year:"90年代",
        desc:"砖头一样沉的家伙，握在手里威风，打个电话要走到信号最好的窗边。",
        story:"大伯从城里带回这个大哥大时，整条巷子都来看热闹。他故意拿着它在院子里踱步，声音大得像在喊话。那时候觉得，这就是成功的样子。",
        img:"images/dageda.jpg",
        comments:[
            {nick:"砖头机",content:"当年谁要是腰上别一个这个，走路都带风，太气派了。"},
            {nick:"信号全靠站位",content:"打个电话得站到窗边或者楼顶，信号差了还得扯着嗓子喊。"},
            {nick:"一部电话一套房",content:"那时候一部大哥大上万块，是真正的身份象征啊。"}
        ]
    }
];
function getItems(){
    let userItems = JSON.parse(localStorage.getItem("oldItems")) || [];
    // 以最新预设为准：图片、网名、文案等更新都能生效，不被 localStorage 旧副本覆盖；
    // 但保留用户对预设物件提交过的评论（按 id 合并去重），以及用户自己新增的藏品。
    const localMap = new Map();
    userItems.forEach(item=> localMap.set(item.id, item));

    const result = defaultItems.map(function(def){
        const local = localMap.get(def.id);
        const merged = Object.assign({}, def);
        if(local){
            // 合并评论：预设评论 + 本地新增评论，按 nick+content 去重
            const seen = new Set();
            const comments = [];
            (def.comments || []).concat(local.comments || []).forEach(function(c){
                const key = (c.nick || '') + '||' + (c.content || '');
                if(!seen.has(key)){ seen.add(key); comments.push(c); }
            });
            merged.comments = comments;
        }
        return merged;
    });

    // 用户自己提交的新藏品（id 不在预设里）原样追加
    const defIds = new Set(defaultItems.map(function(d){ return d.id; }));
    userItems.forEach(function(item){
        if(!defIds.has(item.id)) result.push(item);
    });
    return result;
}

// 保存藏品
function saveItems(list){
    localStorage.setItem("oldItems",JSON.stringify(list));
}

// ========== 馆藏目录（搜索 + 名称/年代/提交人 + 右侧数量 + 悬停预览）==========
let catalogCache = [];   // 全部藏品
let catalogFiltered = []; // 当前筛选结果
let catalogMap = {};      // id -> 藏品，供悬停预览快速查找

function escapeHtml(str){
    return String(str==null ? '' : str).replace(/[&<>"']/g, function(m){
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
    });
}

// 评论列表 HTML：详情页打开与提交后刷新共用同一份模板
function buildCommentsHtml(comments){
    if(!comments || !comments.length){
        return `<p class="story-no-comment">还没有评论，来留下第一句吧。</p>`;
    }
    return comments.map(c=>
        `<div class="comment-item"><strong>${escapeHtml(c.nick)}</strong>：${escapeHtml(c.content)}</div>`
    ).join('');
}

function filterByKeyword(list, kw){
    if(!kw) return [...list];
    return list.filter(it=> [it.name,it.year,it.author]
        .some(v=> String(v==null?'':v).toLowerCase().includes(kw)));
}

function buildCatalogRows(list){
    if(!list.length) return `<div class="catalog-empty">没有找到匹配的藏品</div>`;
    return list.map(item=>`
        <div class="catalog-row" data-id="${item.id}" onmouseenter="showPreview(this)">
          <div class="row-line">
            <span class="c-name">${escapeHtml(item.name)}</span>
            <span class="c-year">${escapeHtml(item.year)}</span>
            <span class="c-author">${escapeHtml(item.author)}</span>
          </div>
        </div>`).join('');
}

// 渲染馆藏页面
function renderCollection(){
    const box = document.getElementById("itemBox");
    if(!box) return; // 没有itemBox直接退出
    catalogCache = getItems();
    catalogMap = {};
    catalogCache.forEach(it=> catalogMap[it.id] = it);

    // 重新渲染时保留已输入的搜索词
    const kwRaw = (document.getElementById('catalogSearch')?.value) || '';
    catalogFiltered = filterByKeyword(catalogCache, kwRaw.trim().toLowerCase());

    box.innerHTML = `
    <div class="catalog-layout">
      <div class="catalog-main">
        <div class="catalog-toolbar">
          <input type="text" id="catalogSearch" class="catalog-search"
                 placeholder="搜索物件名称 / 年代 / 提交人"
                 value="${escapeHtml(kwRaw)}" oninput="filterCatalog()" autocomplete="off">
          <span class="catalog-hint">当前 <b id="shownCount">${catalogFiltered.length}</b> 条</span>
        </div>
        <div class="catalog-head">
          <span>物件名称</span><span>年代</span><span>提交人</span>
        </div>
        <div id="catalogRows">${buildCatalogRows(catalogFiltered)}</div>
      </div>
      <aside class="catalog-side">
        <div class="side-count">
          <div class="side-count-label">馆藏数量</div>
          <div class="side-count-value">${catalogCache.length}<small> 件</small></div>
        </div>
        <div class="side-preview">
          <div class="side-preview-label">预览</div>
          <div class="side-preview-frame" id="previewFrame">
            <span class="side-preview-empty">将鼠标移到左侧目录行<br>查看物件图片</span>
          </div>
          <div class="side-preview-caption" id="previewCaption"></div>
        </div>
      </aside>
    </div>`;
}

// 搜索过滤（输入即筛）
window.filterCatalog = function(){
    const input = document.getElementById('catalogSearch');
    if(!input) return;
    catalogFiltered = filterByKeyword(catalogCache, input.value.trim().toLowerCase());
    const rows = document.getElementById('catalogRows');
    if(rows) rows.innerHTML = buildCatalogRows(catalogFiltered);
    const shown = document.getElementById('shownCount');
    if(shown) shown.textContent = catalogFiltered.length;
}

// 悬停目录行 → 右侧预览图片（保留最后一张，方便查看）
window.showPreview = function(rowEl){
    const item = catalogMap[rowEl.dataset.id];
    const frame = document.getElementById('previewFrame');
    const cap = document.getElementById('previewCaption');
    if(!item || !frame) return;
    if(item.img && item.img.trim()){
        frame.innerHTML = `<img src="${escapeHtml(item.img)}" alt="${escapeHtml(item.name)}">`;
    }else{
        frame.innerHTML = `<div class="side-preview-noimg">${escapeHtml(item.name)}</div>`;
    }
    if(cap) cap.textContent = item.name + ' · ' + item.year;
}

// ========== 年代故事：卡片网格 + 图片飞行放大详情 + 评论 ==========
let storyList = [];
let currentStoryId = null;
let flyingImg = null;       // 当前飞行中的克隆图片
let detailOpen = false;

// 渲染卡片：只有图片 + 物件名称
function renderStoryGrid(){
  const grid = document.getElementById("storyGrid");
  if(!grid) return;
  storyList = getItems();
  grid.innerHTML = storyList.map(item=>{
    const imgHtml = (item.img && item.img.trim())
      ? `<img class="story-card-img" src="${escapeHtml(item.img)}" alt="${escapeHtml(item.name)}">`
      : `<div class="story-card-img story-card-noimg">${escapeHtml(item.name)}</div>`;
    return `
      <div class="story-card" data-id="${item.id}">
        <div class="story-card-media" onclick="openStoryDetail(${item.id}, this)">
          ${imgHtml}
        </div>
        <p class="story-card-name">${escapeHtml(item.name)}</p>
      </div>`;
  }).join('');
}

// 打开详情：图片从卡片位置飞到大图位置
window.openStoryDetail = function(itemId, mediaEl){
  if(detailOpen) return;
  const item = storyList.find(x=>x.id == itemId);
  if(!item) return;
  currentStoryId = itemId;

  const srcEl = mediaEl.querySelector('.story-card-img');
  if(!srcEl) return;
  const startRect = srcEl.getBoundingClientRect();
  const src = item.img && item.img.trim() ? item.img : '';

  // 计算评论
  const commentsHtml = buildCommentsHtml(item.comments);

  // 填充详情面板（先隐藏大图，等飞行结束再显示）
  const panel = document.getElementById("storyDetailPanel");
  const detail = document.getElementById("storyDetail");
  const imgBlock = src
    ? `<img class="detail-hero-img" src="${escapeHtml(src)}" alt="${escapeHtml(item.name)}">`
    : `<div class="detail-hero-img detail-hero-noimg">${escapeHtml(item.name)}</div>`;
  panel.innerHTML = `
    <div class="detail-hero">
      ${imgBlock}
    </div>
    <div class="detail-body">
      <h3 class="detail-name">${escapeHtml(item.name)}</h3>
      <div class="detail-meta">
        <span>提交人：${escapeHtml(item.author || '匿名')}</span>
        <span>年代：${escapeHtml(item.year)}</span>
      </div>
      <div class="detail-section">
        <h4>物件介绍</h4>
        <p>${escapeHtml(item.desc || '')}</p>
      </div>
      <div class="detail-section">
        <h4>物件的故事</h4>
        <p class="detail-story">${escapeHtml(item.story || '这件物件背后的故事，还在等待主人慢慢讲述。')}</p>
      </div>
      <div class="detail-section comment-section">
        <h4>评论区</h4>
        <div class="detail-comments" id="detailComments">${commentsHtml}</div>
        <div class="comment-form">
          <input type="text" class="detail-com-nick" placeholder="你的昵称">
          <input type="text" class="detail-com-content" placeholder="写下评论">
          <button type="button" onclick="submitStoryComment(${item.id})">发送</button>
        </div>
      </div>
    </div>`;

  detail.classList.add("show");
  detailOpen = true;
  document.body.style.overflow = "hidden";

  const heroEl = panel.querySelector('.detail-hero-img');
  // 未加载图片也要占位，先隐藏真实大图
  heroEl.style.visibility = "hidden";

  // 目标位置：等面板布局完成后测量
  requestAnimationFrame(function(){
    const endRect = heroEl.getBoundingClientRect();
    flyImage(src, item.name, startRect, endRect, function(){
      heroEl.style.visibility = "visible";   // 飞行结束，显示真图
      removeFlying();
    });
  });
};

// 关闭详情：图片从大图位置缩回卡片位置
window.closeStoryDetail = function(){
  if(!detailOpen) return;
  const panel = document.getElementById("storyDetailPanel");
  const detail = document.getElementById("storyDetail");
  const heroEl = panel.querySelector('.detail-hero-img');
  const card = document.querySelector(`.story-card[data-id="${currentStoryId}"]`);
  const targetEl = card ? card.querySelector('.story-card-img') : null;

  if(!heroEl || !targetEl){
    finishClose();
    return;
  }
  const startRect = heroEl.getBoundingClientRect();
  const endRect = targetEl.getBoundingClientRect();
  const src = storyList.find(x=>x.id == currentStoryId)?.img || '';

  heroEl.style.visibility = "hidden";
  targetEl.style.visibility = "hidden";
  // 面板内容淡出，遮罩保持，飞图缩回
  panel.style.opacity = "0";

  flyImage(src, '', startRect, endRect, function(){
    targetEl.style.visibility = "visible";
    finishClose();
  });
};

function finishClose(){
  removeFlying();
  const detail = document.getElementById("storyDetail");
  const panel = document.getElementById("storyDetailPanel");
  detail.classList.remove("show");
  if(panel) panel.style.opacity = "";
  document.body.style.overflow = "";
  detailOpen = false;
  currentStoryId = null;
}

// 通用飞图：克隆一张图片，从 startRect 动画到 endRect
function flyImage(src, alt, startRect, endRect, done){
  removeFlying();
  let fly;
  if(src && src.trim()){
    fly = document.createElement("img");
    fly.className = "story-flying-img";
    fly.src = src;
    fly.alt = alt || "";
  }else{
    // 无图片时用带名称的占位块飞行，避免空 src 显示破图图标
    fly = document.createElement("div");
    fly.className = "story-flying-img story-flying-noimg";
    fly.textContent = alt || "";
  }
  fly.style.left = startRect.left + "px";
  fly.style.top = startRect.top + "px";
  fly.style.width = startRect.width + "px";
  fly.style.height = startRect.height + "px";
  document.body.appendChild(fly);
  flyingImg = fly;

  // 强制重排后再设置目标位置，触发过渡
  fly.getBoundingClientRect();
  requestAnimationFrame(function(){
    fly.classList.add("flying");
    fly.style.left = endRect.left + "px";
    fly.style.top = endRect.top + "px";
    fly.style.width = endRect.width + "px";
    fly.style.height = endRect.height + "px";
  });

  let finished = false;
  function finish(){
    if(finished) return;
    finished = true;
    fly.removeEventListener("transitionend", finish);
    if(done) done();
  }
  fly.addEventListener("transitionend", finish);
  // duration 由 CSS 控制（0.45s），这里兜底
  setTimeout(finish, 600);
}

function removeFlying(){
  if(flyingImg){ flyingImg.remove(); flyingImg = null; }
}

// 详情内提交评论
window.submitStoryComment = function(itemId){
  const panel = document.getElementById("storyDetailPanel");
  const nick = panel.querySelector('.detail-com-nick').value.trim();
  const content = panel.querySelector('.detail-com-content').value.trim();
  if(!nick || !content){ alert("昵称和评论不能为空"); return; }
  const items = getItems();
  const target = items.find(x=>x.id == itemId);
  if(!target) return;
  target.comments = target.comments || [];
  target.comments.push({nick, content});
  saveItems(items);

  // 同步本地 storyList，重新渲染评论列表
  const local = storyList.find(x=>x.id == itemId);
  if(local) local.comments = target.comments;
  const box = document.getElementById("detailComments");
  if(box) box.innerHTML = buildCommentsHtml(target.comments);
  panel.querySelector('.detail-com-content').value = "";
}

// ========== 焦点轮播（自动轮播 + 箭头切换） ==========
let galleryList = [];
let currentIndex = 0;
let autoTimer = null;

// 渲染展厅轮播
function renderGallery(){
  const box = document.getElementById("galleryBox");
  if(!box) return;
  galleryList = getItems();
  if(galleryList.length === 0) {
    box.innerHTML = "<p style='text-align:center;color:#784212;'>暂无藏品</p>";
    return;
  }
  let html = "";
    galleryList.forEach((item,idx)=>{
      let content = "";
      if(item.img && item.img.trim() !== ""){
        content = `<img src="${item.img}" alt="${item.name}" loading="lazy">`;
      }else{
        content = `<div class="noimg-text">${item.name}</div>`;
      }
      html += `<div class="carousel-item" data-index="${idx}">${content}</div>`;
    })
  box.innerHTML = html;

  currentIndex = 0;
  updateCarousel();
  startAutoPlay();
}


// 更新轮播位置、样式【修复：不再添加other类！】
function updateCarousel(){
  const allItems = document.querySelectorAll(".carousel-item");
  const total = galleryList.length;
  // 全部重置为基础class，默认透明
  allItems.forEach(el=>{
    el.className = "carousel-item";
  })
  // 只有1个
  if(total === 1){
    allItems[0].classList.add("active");
    return;
  }
  const prevIdx = (currentIndex - 1 + total) % total;
  const nextIdx = (currentIndex + 1) % total;

  allItems[prevIdx].classList.add("prev-item");
  allItems[currentIndex].classList.add("active");
  allItems[nextIdx].classList.add("next-item");
}

// 开启自动轮播
function startAutoPlay(){
  clearInterval(autoTimer);
  autoTimer = setInterval(()=>{
    slideNext();
  }, 3200);
}
function slideNext(){
  currentIndex = (currentIndex + 1) % galleryList.length;
  updateCarousel();
}
function slidePrev(){
  currentIndex = (currentIndex - 1 + galleryList.length) % galleryList.length;
  updateCarousel();
}

// 绑定箭头点击事件
document.addEventListener("click",function(e){
  if(e.target.classList.contains("next")){
    slideNext();
  }
  if(e.target.classList.contains("prev")){
    slidePrev();
  }
})


// 提交藏品表单
const itemForm = document.getElementById("itemForm");
if(itemForm){
    itemForm.addEventListener("submit",async function(e){
        e.preventDefault();
        const authorName = document.getElementById("authorName").value.trim();
        const itemName = document.getElementById("itemName").value.trim();
        const itemYear = document.getElementById("itemYear").value.trim();
        const itemDesc = document.getElementById("itemDesc").value.trim();
        const itemStory = (document.getElementById("itemStory")?.value || "").trim();
        const fileInput = document.getElementById("itemImg");
        if(!authorName || !itemName || !itemYear || !itemDesc){
            alert("昵称、物件名、年代、介绍都不能为空！");
            return;
        }
        let imgBase64 = "";
        if(fileInput.files[0]){
            imgBase64 = await fileToBase64(fileInput.files[0]);
        }
        const items = getItems();
        const newId = Date.now();
        items.push({
            id:newId,
            author:authorName,
            name:itemName,
            year:itemYear,
            desc:itemDesc,
            story:itemStory,
            img:imgBase64,
            comments:[]
        })
        saveItems(items);
        alert("提交成功！");
        itemForm.reset();
    })
}
// 图片转base64（本地预览，不用服务器）
function fileToBase64(file){
    return new Promise(resolve=>{
        const reader = new FileReader();
        reader.onload = e=>resolve(e.target.result);
        reader.readAsDataURL(file);
    })
}

// 首页精选馆藏拍立得卡片
function renderPolaroid(){
  const allItems = getItems();
  const container = document.getElementById("polaroidContainer");
  if(!container || !allItems || allItems.length <3) return;
  const shuffle = [...allItems].sort(()=> Math.random()-0.5);
  const pick3 = shuffle.slice(0,3);
  let html = "";
  pick3.forEach(item=>{
    let imgSrc = item.img || "";
    html += `
    <div class="polaroid-card">
      <img src="${imgSrc}" alt="${item.name}">
      <p>${item.name}</p>
    </div>
    `
  })
  container.innerHTML = html;
}

// 页面加载自动渲染
window.onload = function(){
    renderCollection();
    renderGallery();
    renderPolaroid();
    renderStoryGrid();
}
const btn = document.querySelector('.btn-more');
if(btn){
    btn.addEventListener('mouseup', ()=>{
        btn.classList.add('spring');
        setTimeout(()=>btn.classList.remove('spring'),400);
    })
}

// ========== 页面切换交给浏览器原生视图过渡（见 style.css 的 @view-transition）==========
// 不再用 JS 拦截 + 延时跳转：那种方式会在卸载旧页面后留下白屏窗口。
// 原生视图过渡会在导航期间保留旧页面快照，新页面就绪后才切换，全程无空白。

