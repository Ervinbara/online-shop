import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponentAdmin implements OnInit {
  product: Product = new Product();
  isNewProduct: boolean = false;
  selectedFile: File | null = null;
  imageName: string | null = null; // Variable pour stocker le nom de l'image

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'new') {
      this.isNewProduct = true;
      this.product = new Product(); // Initialiser un nouveau produit
    } else if (id && !isNaN(+id)) {
      this.isNewProduct = false;
      this.productService.getProduct(+id).subscribe(product => this.product = product);
    } else {
      // Gestion du cas où l'ID est invalide ou non trouvé
      console.error('Invalid product ID');
      this.router.navigate(['/admin/products']);
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.http.post('http://localhost:8080/api/products/upload', formData, { responseType: 'text' })
      .subscribe(
        (response: string) => {
          console.log('Image uploaded successfully:', response);
          // Stocker le nom de l'image
          this.imageName = response;
        },
        (error: HttpErrorResponse) => {
          console.error('Error uploading image:', error);
          // Gérer les erreurs de téléversement ici
        }
      );
  }

  saveProduct(): void {
    // Attribuer le nom de l'image au produit avant de le sauvegarder
    if (this.imageName) {
      this.product.image = this.imageName;
    }

    console.log('Saving product:', this.product);
    if (this.isNewProduct) {
      this.productService.createProduct(this.product).subscribe(
        () => {
          console.log('Product created successfully');
          this.router.navigate(['/admin/products']);
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    } else {
      this.productService.updateProduct(this.product.id, this.product).subscribe(
        () => {
          console.log('Product updated successfully');
          this.router.navigate(['/admin/products']);
        },
        error => {
          console.error('Error updating product:', error);
        }
      );
    }
  }
}
