import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ServerService } from './server.service';

describe('ServerService', () => {
  let service: ServerService;
  let httpClientSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    // service = TestBed.inject(ServerService);

    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new ServerService(httpClientSpy as any);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected users', () => {
    const users: any[] = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    httpClientSpy.get.and.returnValue(of(users));

    service.getUserList().subscribe( heroes => {
      expect(heroes).toEqual(users, 'expected users');
    });

    // expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return 201 if user created', () => {
    const mockData  = { id: 1, name: 'A' };
    const response = new HttpResponse({
      status: 201, statusText: 'Created'
    });

    httpClientSpy.post.and.returnValue(of(response));

    service.createUser(mockData).subscribe( res => {
      expect(res).toEqual(response, 'expected response')
    });
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    service.getUserList().subscribe( heroes => {
      fail('expected an error');
      }, error  => {
        expect(error.status).toEqual(404);
      }
    );
  });
});
