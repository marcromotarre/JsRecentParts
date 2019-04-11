class _4_4_ {
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
    console.log("4.4. Destructuring Solution")
    this.handleResponse({
      topic: "JS Recent Parts",
      slides: {
        end: 77
      }
    });
  }

  handleResponse({
    topic = "Javascript",
    format = "Live",
    slides: {
      start = 0,
      end = 100
    } = {},
    ...otherProps
  } = {}) {
    this.TestCase({
      topic,
      format,
      slides: {
        start,
        end
      },
    ...otherProps
    })
  }

  TestCase (data) {
    console.log(data.topic, "JS Recent Parts")
    console.log(data.format, "Live")
    console.log(data.slides.start, 0)
    console.log(data.slides.end, 77)
    console.log(
      data.topic == "JS Recent Parts" &&
      data.format == "Live" &&
      data.slides.start === 0 && 
      data.slides.end == 77
    );
  }
}