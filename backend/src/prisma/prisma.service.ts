import { Injectable } from '@nestjs/common';
import { PrismaClient } from './generated/client.js';

@Injectable()
export class PrismaService extends PrismaClient {}
