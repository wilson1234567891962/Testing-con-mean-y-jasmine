function expect(actual) {
    return {
      toBe(expect) {
        if (actual !== expect) {
          throw new Error('Prueba no existosa');
        }
      }
    };
  }
  
  function it(title, callback) {
    try {
      callback();
      console.log(`✅ ${title}`);
    } catch (error) {
      console.log(`❎ ${title}`);
    }
  }