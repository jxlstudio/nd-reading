# Neurodivergent Reading Bookmarklet

Made this because I hate that "Bionic Reading" put their simple but amazing creation behind a cost-prohibitive paywall. The bookmarklet is not perfect, but it works well enough.

I've seen a few projects to make browser extensions that are similar to BR but all the ones I found haven't been touched in over a year. Maybe I'll take a crack at one when I have more time.

## How to Install

Copy the following code:

```
javascript:%22use%20strict%22;void%20function(){function%20a(b){if(b.nodeType===Node.TEXT_NODE){const%20a=b.textContent.split(/\s+/),c=a.map(a=%3E{var%20b=Math.ceil;if(12%3C=a.length)return`%3Cspan%20style=%22${%22font-weight:%20800;%20font-size:%200.96;%22}%22%3E${a.slice(0,b(a.length/2))}%3C/span%3E${a.slice(b(a.length/2))}`;return%2010%3C=a.length%3F`%3Cspan%20style=%22${%22font-weight:%20800;%20font-size:%200.96;%22}%22%3E${a.slice(0,4)}%3C/span%3E${a.slice(4)}`:8%3C=a.length%3F`%3Cspan%20style=%22${%22font-weight:%20800;%20font-size:%200.96;%22}%22%3E${a.slice(0,3)}%3C/span%3E${a.slice(3)}`:4%3C=a.length%3F`%3Cspan%20style=%22${%22font-weight:%20800;%20font-size:%200.96;%22}%22%3E${a.slice(0,2)}%3C/span%3E${a.slice(2)}`:1%3Ca.length%3F`%3Cspan%20style=%22${%22font-weight:%20800;%20font-size:%200.96;%22}%22%3E${a.charAt(0)}%3C/span%3E${a.slice(1)}`:a}),d=c.join(%22%20%22),e=document.createElement(%22span%22);e.innerHTML=d,b.parentNode.replaceChild(e,b)}else%20if(b.nodeType===Node.ELEMENT_NODE)for(const%20c%20of%20b.childNodes)a(c)}(function(){const%20a=document.querySelectorAll(%22*%22);for(const%20b%20of%20a)b.style.fontWeight=%22400%22,%22uppercase%22===b.style.textTransform%26%26(b.style.textTransform=%22capitalize%22),b.classList.contains(%22uppercase%22)%26%26b.classList.remove(%22uppercase%22),%22h1%22!==b.tagName%26%26%22h2%22!==b.tagName%26%26%22h3%22!==b.tagName%26%26%22h4%22!==b.tagName%26%26%22h5%22!==b.tagName%26%26%22h6%22!==b.tagName%26%26(b.style.fontSize=%221rem%22),b.style.letterSpacing=%220.35px%22,b.style.lineHeight=%222.5%22})(),a(document.body)}();
```


Create a new bookmark in your browser, and paste the code where the URL would go.

If you have any issues or suggestions, hit me up on Discord or in the Issues tab.