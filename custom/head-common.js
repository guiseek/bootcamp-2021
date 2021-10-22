customElements.define('head-common',
  class extends HTMLElement {
    scripts = [
      { src: '/third-party/prism/prism.min.js' }
    ]
    links = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com ' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'third-party/prism/prism.css' }
      
    ];
    connectedCallback() {
      console.log(document.head.baseURI);
      if (document.head.baseURI.indexOf('github') > -1) {
        const base = document.createElement('base');
        base.setAttribute('href', '/bootcamp-2021/');
        document.head.appendChild(base);
      }

      this.links.map(({ rel, href, crossorigin}) => {
        const link = document.createElement('link');

        link.setAttribute('rel', rel);
        link.setAttribute('href', href);

        if (typeof crossorigin === 'string') {
          link.setAttribute('crossorigin', crossorigin);
        }
        
        document.head.appendChild(link);
      })
      
      this.scripts.map(({ src, type }) => {
        const script = document.createElement('script');

        script.setAttribute('src', src);

        if (type) script.setAttribute('type', type);
        
        document.body.appendChild(script);
      })
    }
  }
)