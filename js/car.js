AFRAME.registerComponent("car" , {
    schema:{
        modelRef: { type: "string", default: "../assets/source/Car_cartoon.gltf" },
    clickCounter: { type: "number", default: 0 }
    },

    init: function() {
        // Do something when component first attached.
        this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = { x: 0, y: 50, z: 80 };
        const rotation = { x: 0, y: -100, z: 0 };
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
      },

    })