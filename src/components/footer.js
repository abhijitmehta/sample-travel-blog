/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        A GatsbyJS Starter for Netlify CMS, Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="/">Stackrole.com</Link>
      </p>
    </div>
<script type="text/javascript">
window.__ET = { "partnerId": "tamt0rypgtwguv6e"};
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = 'https://assets.eddytravels.com/widget.min.js';
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
</script>
  </footer>
)

export default Footer
