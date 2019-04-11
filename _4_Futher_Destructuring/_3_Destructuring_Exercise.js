class _4_3_ {
  constructor() { 

    this.defaults = {
      topic: "Javascript",
      format: "Live",
      slides: {
        start: 0,
        end: 100
      }
    };
    this.Run()

  }

  Run () {
    console.log("4.3. Destructuring Exercise")
    this.handleResponse();
  }

  handleResponse(/* destructuring here */) {
    this.TestCase({
      /* restructuring here */
    })
  }

  TestCase (data) {
    console.log(
      data.topic == "JS Recent Parts" &&
      data.format == "Live" &&
      data.slides.start === 0 && 
      data.slides.end == 77
    );
  }
}