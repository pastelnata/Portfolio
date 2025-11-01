import { IsString, IsOptional, IsArray, IsUrl } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsUrl()
  demoLink?: string;

  @IsString()
  codeLink: string;

  @IsArray()
  @IsString({ each: true })
  techStack: string[];

  @IsArray()
  @IsString({ each: true })
  features: string[];

  @IsOptional()
  @IsString()
  architecture?: string;
}
