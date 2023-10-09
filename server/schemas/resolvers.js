const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Exercise} = require('../models/Exercise');
const { User } = require('../models/User');

