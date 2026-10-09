import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Andaman Trails Travel Platform REST API',
      version: '1.0.0',
      description: 'Production-ready REST API documentation for Andaman Trails (Destinations, Ferries, Cruises, Stays, Bookings, Blogs, Admin)',
      contact: {
        name: 'Andaman Trails Engineering Team',
        email: 'support@andamantrails.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1',
        description: 'Development Server v1',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

export const swaggerSpec = swaggerJSDoc(options);
