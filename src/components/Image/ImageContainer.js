const ImageContainer = (props) => {
  return (
    <div className="d-flex justify-content-center flex-column w-50 m-auto">


      <div className="card text-center m-2 p-2">
        <h2>Image Title</h2>
        <img src="/images/coffee.jpg" alt="coffee cups"></img>
      </div>
      <div className="card p-2">
        <i class="bi bi-pentagon"></i>
      </div>

    </div>
  )
}

export default ImageContainer;