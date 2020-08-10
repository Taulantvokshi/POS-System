// import React, { useRef } from 'react'
// import { Upload } from '../../../../../icons/icon_component'
// import { connect } from 'react-redux'
// const UploadImage = ({ hasImage }) => {
//   const ref = useRef()
//   console.log(hasImage, 'lalalalalalal')

//   var loadFile = function (event) {
//     var reader = new FileReader()
//     reader.onload = function () {
//       var output = document.getElementById('output')
//       output.src = reader.result
//     }
//     reader.readAsDataURL(event.target.files[0])
//   }
//      var loadFile = function (event) {
//         var reader = new FileReader();
//         reader.onload = function () {
//             var output = document.getElementById('output');
//             output.src = reader.result;

//         };
//         reader.readAsDataURL(event.target.files[0]);
//     };

//   return (
//     <form
//       className="new_product_header_image"
//       onChange={() => {
//         // ref.current.click()
//       }}
//       action="/api/products"
//       method="post"
//       encType="multipart/form-data"
//     >
//       <input
//         onChange={loadFile}
//         type="file"
//         name="picture"
//         placeholder="image"
//         id="file"
//         style={{ display: 'none' }}
//       />
//       <label
//         className="image_label"
//         style={{ cursor: 'pointer', width: '100%', height: '100%' }}
//         htmlFor="file"
//       >
//         <img id="output" />
//         <div>
//           <Upload size="20px" color="grey" />
//         </div>
//       </label>

//       <button style={{ display: 'none' }} ref={ref} type="submit" />
//     </form>
//   )
// }
// const mapStateToProps = (store) => {
//   return { hasImage: store.products.image }
// }
// export default connect(mapStateToProps)(UploadImage)
