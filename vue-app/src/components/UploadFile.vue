<template>
  <div class="col-sm-3 col-sm-5">
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
      v-on:vdropzone-success="uploadSuccess"
    ></vue-dropzone>
  </div>
</template>

<script>
import { bus } from "@/event-bus";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "FileUpload",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data: function () {
    return {
      dropzoneOptions: {
        url: "http://localhost:5000/upload",
        headers: { enctype: "multipart/form-data" },
        method: "POST",
        acceptedFiles: ".csv",
        renameFile: function (file) {
          console.log(file.name);
          return "file";
        },
      },
    };
  },
  methods: {
    uploadSuccess(file, response) {
      console.log(file.name);
      console.log("Success!");
      bus.$emit("upload-success");
      console.log(response);
    },
  },
};
</script>
<style scoped>
.column {
  width: 100px;
}
</style>

