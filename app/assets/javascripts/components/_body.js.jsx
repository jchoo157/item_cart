var Body = React.createClass({
  getInitialState() {
    return { items: [] }
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },

  handleDelete(id) {
    $.ajax({
      url: '/api/v1/items/${id}',
      type: 'DELETE',
      success(response) {
        console.log('successfully removed item')
      }
    });
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response })})
  },

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} handleDelete={this.handleDelete} />
      </div>
    )
  }
})