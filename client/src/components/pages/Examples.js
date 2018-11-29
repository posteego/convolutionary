import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { Pair } from '../parts';
import api from '../../tools/api';

class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: [],
    };
  }

  componentDidMount() {
    this.getPairs();
  }

  getPairs = () => {
    api.getPairs()
      .then(res =>
        this.setState({
          pairs: res.data,
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <div className={classes.hero}>
          <Typography variant="h1" color="secondary" className={classes.title}>
            Examples
          </Typography>
        </div>
        <div>
          {this.state.pairs.length ? (
            <p>{this.state.books.map(book => (
              <Pair
                key={book.id}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                link={book.volumeInfo.infoLink}
                authors={book.volumeInfo.authors.join(", ")}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                Button={() => (
                  <button
                    onClick={() => this.handleBookSave(book.id)}
                    className="btn btn-primary ml-2"
                  >
                    Save
                        </button>
                )}
              />
            ))}
</p>
          ) : (
            <p>There are no graph examples</p>
          )}
        </div>
      </main>
    );
  }
}

const styles = () => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    marginTop: 80,
    textAlign: 'center',
  },
  hero: {
    margin: 0,
    marginBottom: 300,
  },
  title: {
    fontFamily: "Questrial",
    fontWeight: 'bold',
  },
});

export default withStyles(styles)(Examples);