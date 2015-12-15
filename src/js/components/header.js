var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <div className="wrapper">
        	<h1>HUAI-CHE LU</h1>
        	<nav>
	        	<ul>
	        		<li><a href='#'>about</a></li>
	        		<li><a href='#'>works</a></li>
							<li><a href='#'>contact</a></li>
	        	</ul>
	        </nav>
        </div>
      </header>
    );
  }
});

module.exports = Header;