var Project = React.createClass({
  render: function() {
    return (
      <div className='project'>
      	<img src="dist/img/ri.jpg" />
      	<h3>Project Name</h3>
      </div>
    );
  }
});

var Projects = React.createClass({
  render: function() {
    return (
      <div className='wrapper'>
      	<h2>Projects</h2>
      	<div className='wrapper'>
	      	<Project />
	      	<Project />
	      	<Project />
	      	<Project />
	      	<Project />
	      	<Project />
	      </div>
      </div>
    );
  }
});

module.exports = Projects;