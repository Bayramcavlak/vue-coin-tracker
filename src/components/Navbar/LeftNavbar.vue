<template>
  <div>
    <div class="offcanvas offcanvas-end" id="demo">
      <div class="offcanvas-header">
        <h1 class="offcanvas-title">Heading</h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div class="offcanvas-body">
        <p>Some text lorem ipsum.</p>
        <p>Some text lorem ipsum.</p>
        <p>Some text lorem ipsum.</p>
        <button class="btn btn-secondary" type="button">A Button</button>
      </div>
    </div>
    <div class="container-fluid mt-3">
      
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#demo"
      >
        Toggle Right Offcanvas
      </button>
    </div>
  </div>
</template>
