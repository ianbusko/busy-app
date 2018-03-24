const schema = {
  type:"object",
  properties:{
    users:{
      type:"array",
      minItems:1,
      maxItems:3,
      items:{
        type:"object",
        properties:{
          id:{
            type:"integer",
            unique:true,
            minimum:1
          },
          name:{
            type:"string",
            faker:"name.findName"
          },
          email:{
            type:"string",
            format:"email",
            faker:"internet.email"
          },
          depth:{
            type:"integer",
            minimum:1,
            maximum:5,
          }
        },
        required: ['id', 'name', 'email', 'depth']
      }
    }
  }
};

module.exports = schema;
