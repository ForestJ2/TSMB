const classMap = {
	h1: "font-weight-light blog-title",
	h2: "blog-header",
	h3: "blog-header",
	h4: "blog-header",
	h5: "lead font-italic text-muted",
	img: "img-fluid img-thumbnail mx-auto d-block",
	a: "blog-link",
	center: "blog-center",
	table: "table table-striped table-hover table-responsive-md",
	thead: "thead-dark",
	blockquote: "blockquote"
};

const bindings = Object.keys(classMap)
	.map(key => ({
		type: 'output',
		regex: new RegExp(`<${key}(.*)>`, 'g'),
		replace: `<${key} class="${classMap[key]}" $1>`
}));

function viewBlog(title) {
	$.get(`blog/${title}.md`, function(data){
		var conv = new showdown.Converter({extensions: bindings});
		conv.setOption("tables", true);

		$("#main-container")[0].innerHTML = conv.makeHtml(data);
		hljs.highlightAll();
	}).fail(function(){
		$("#main-container")[0].innerHTML = "<center><h2>ERROR</h2><p>Could not load blog post.</p></center>";
	});
}

function getBlogList(modify_page=true) {
	$.getJSON("conf/blog_index.json", function(data) {
		var title = false;

		$.each(data.reverse(), function(k,v) {
			title = v;
			$("#side-nav-links").append(`<li class="nav-item"><a class="nav-link" href="#${v}" onclick="viewBlog('${v}')">${v}</a></li>`);
		});

		$(".nav-link").hover(
			function(){$(this).addClass('active')},
			function(){$(this).removeClass('active')}
		);

		if (modify_page === true && title !== false) {viewBlog(title);}
	});
}

function loadSite(blog_post="") {
	var year = (new Date()).getFullYear().toString();
	$.getJSON("/conf/blog.json", function(data){
		if (year.localeCompare(data["CreationYear"]) == 0) {
			$("#year")[0].innerText = year;
		} else {
			$("#year")[0].innerText = `${data["CreationYear"]} - ${year}`;
		}

		$("#copyright")[0].innerHTML = data["Copyright"];
		$(".site-name").each(function(i,elem){ elem.innerText = data["SiteName"]; });
		$(".og-title").each(function(i,elem){ elem.innerText = data["SiteName"]; });
		$(".og-url").each(function(i,elem){ elem.innerText = data["SiteURL"]; });
		$(".og-description").each(function(i,elem){ elem.innerText = data["SiteDescription"]; });
		$(".og-image").each(function(i,elem){ elem.innerText = data["LinkEmbedImage"]; });
	});

	getBlogList((blog_post === ""));

	if (blog_post !== "") {
		viewBlog(blog_post);
	}
}
