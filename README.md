# React-rate
- `npm i --save https://github.com/mtrabelsi/react-rate`
- `npm start`
# Usage


```
  import ReactRate from 'react-rate'

  <ReactRate title="this is a custom title"
            btnLabel="custom button label"
            postRatingLabel="Rating has been submitted! we will get back to you soon"
            submitFn={(rate, feedback) => alert(`this is custom submit fn, typed values: <${rate}, ${feedback}>`)} />
```

