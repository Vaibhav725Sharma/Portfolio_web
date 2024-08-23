const ReactCommerce = ({ item }) => {
  const ref = React.useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect: true,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container" ref={ref}>
        <div className="wrapper">
          <div className="imageContainer">
            {item.video ? (
              <iframe
                width="100%"
                height="300"
                src={item.video}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img src={item.img} alt={item.title} />
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReactCommerce;
