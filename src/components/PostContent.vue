<template>
  <div class="post">
    <div class="post__img">
      <img src="@/assets/images/post-img.jpg" alt="">
    </div>
    <h1>A small selection of <span>recent projects</span></h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ligula quis lacus fermentum, vitae vulputate sem tristique. Nunc justo orci, porta in luctus eget, ultrices vitae justo. Mauris dignissim laoreet mi, a commodo libero volutpat non.</p>
    <p>Proin urna tortor, bibendum at faucibus auctor, cursus sit amet odio. In hac habitasse platea dictumst. Proin ac tortor vel tortor auctor pellentesque eget nec nisl. Phasellus pulvinar varius tortor sed sagittis. Etiam aliquam consectetur purus fringilla varius. Maecenas nec dolor dolor. Cras faucibus malesuada luctus. Nam auctor vel tortor eget congue. Fusce porta imperdiet ante scelerisque ullamcorper. Pellentesque luctus ullamcorper lectus faucibus fringilla. Aenean tristique efficitur iaculis. Aliquam eu egestas mi, quis tristique justo. Donec eu ante at tellus eleifend pellentesque. </p>
    <p>Maecenas aliquam sed leo eu blandit. Nam vehicula rhoncus libero ut porttitor. Curabitur fermentum lectus eu erat porta, id sagittis sem aliquet. Integer aliquet vehicula lectus, nec finibus nibh tincidunt eu. Vestibulum quis dui nisi. In a pharetra enim, id blandit quam. Sed lobortis ligula enim, egestas aliquam purus facilisis et. Phasellus vitae leo a ligula commodo ultrices sed non elit.</p>
  </div>
</template>

<style scoped>
.post__img {
  margin-bottom: 48px;
  margin-inline: calc(var(--page-gap) * -1);
  text-align: center;
}

img {
  max-width: 100%;
  display: block;
}

h1 {
  margin: 0 0 1em;
  font-size: 48px;
  line-height: 1;
  text-align: center;
}

h1>span {
  color: #CBACF9;
}

p {
  font-size: 20px;
  line-height: 150%;
}
</style>