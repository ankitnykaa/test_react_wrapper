import React from 'react';

class App extends React.Component {
   componentDidMount() {
     
   }
   render() {
      return (
         <div className="widget" data-id={this.props.inventoryId}>
         </div>
      );
   }
}

export default App;
